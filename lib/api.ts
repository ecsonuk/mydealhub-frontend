const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export async function getHomepageData() {
  const response = await fetch(`${API_URL}/api/homepage`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch homepage data");
  }

  return response.json();
}
