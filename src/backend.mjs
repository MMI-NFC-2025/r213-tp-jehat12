import PocketBase from "pocketbase";

// ⚠️ mets l'URL de TON PocketBase (local le plus classique)
const pb = new PocketBase("http://127.0.0.1:8090");

export async function getOffres() {
  try {
    const data = await pb.collection("maison").getFullList({
      sort: "-created",
    });
    return data;
  } catch (error) {
    console.log("Erreur getOffres()", error);
    return [];
  }
}

export function getImageUrl(record, recordImage) {
  return pb.files.getURL(record, recordImage);
}
