"use client";

import { useState, useRef } from "react";
import { createBrowserClient } from "@/lib/supabase";
import Image from "next/image";

interface ImageUploadProps {
  defaultValue?: string;
  name: string;
}

export default function ImageUpload({ defaultValue = "", name }: ImageUploadProps) {
  const [tab, setTab] = useState<"upload" | "url">(defaultValue ? "url" : "upload");
  const [imageUrl, setImageUrl] = useState(defaultValue);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setUploadError("");
    try {
      const supabase = createBrowserClient();
      const ext = file.name.split(".").pop();
      const filename = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
      const { error } = await supabase.storage
        .from("product-images")
        .upload(filename, file, { cacheControl: "3600", upsert: false });
      if (error) throw error;
      const { data } = supabase.storage.from("product-images").getPublicUrl(filename);
      setImageUrl(data.publicUrl);
    } catch (err) {
      setUploadError(err instanceof Error ? err.message : "Upload failed.");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div>
      <div className="flex gap-0 mb-3 border rounded overflow-hidden" style={{ borderColor: "var(--color-border, #E5E7EB)", display: "inline-flex" }}>
        {(["upload", "url"] as const).map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            className="px-4 py-1.5 font-nunito text-xs font-semibold transition-colors"
            style={{
              background: tab === t ? "var(--color-text)" : "#fff",
              color: tab === t ? "#fff" : "var(--color-muted)",
            }}
          >
            {t === "upload" ? "Upload File" : "Paste URL"}
          </button>
        ))}
      </div>

      {tab === "upload" && (
        <div>
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="block w-full font-nunito text-sm mb-2"
            style={{ color: "var(--color-text)" }}
          />
          {uploading && (
            <p className="font-nunito text-xs" style={{ color: "var(--color-muted)" }}>
              Uploading...
            </p>
          )}
          {uploadError && (
            <p className="font-nunito text-xs" style={{ color: "var(--color-red)" }}>
              {uploadError}
            </p>
          )}
        </div>
      )}

      {tab === "url" && (
        <input
          type="text"
          placeholder="https://..."
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="w-full px-4 py-2.5 rounded border font-nunito text-sm outline-none"
          style={{
            borderColor: "var(--color-border, #E5E7EB)",
            color: "var(--color-text)",
            background: "var(--color-surface)",
          }}
        />
      )}

      <input type="hidden" name={name} value={imageUrl} />

      {imageUrl && (
        <div className="mt-3 relative w-24 h-24 rounded border overflow-hidden" style={{ borderColor: "var(--color-border, #E5E7EB)" }}>
          <Image src={imageUrl} alt="Preview" fill className="object-contain" sizes="96px" />
        </div>
      )}
    </div>
  );
}
