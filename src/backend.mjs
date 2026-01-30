import PocketBase from "pocketbase";

const db = new PocketBase("http://127.0.0.1:8090"); // <- change si besoin

export async function getOffres() {
  try {
    const data = await db.collection("maison").getFullList({
      sort: "-created",
    });
    return data;
  } catch (error) {
    console.log("Une erreur est survenue en lisant la liste des maisons", error);
    return [];
  }
}

export function getImageUrl(record, recordImage) {
  return db.files.getURL(record, recordImage);
}
