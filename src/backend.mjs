import PocketBase from "pocketbase";

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

export async function getOffre(id) {
  try {
    const data = await pb.collection("maison").getOne(id);
    return data;
  } catch (error) {
    console.log("Erreur getOffre()", error);
    return null;
  }
}

export async function getOffresBySurface(surfaceMin) {
  try {
    return await pb.collection("maison").getFullList({
      filter: `surface >= ${surfaceMin}`,
      sort: "-created",
    });
  } catch (error) {
    console.log(`Erreur surface >= ${surfaceMin}`, error);
    return [];
  }
}
