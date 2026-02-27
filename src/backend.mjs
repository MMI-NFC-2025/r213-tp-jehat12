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

export async function addOffre(formData) {
  try {
    await pb.collection('maison').create(formData);
    return { success: true, message: 'Offre ajoutée avec succès' };
  } catch (error) {
    console.log('Erreur ajout maison', error);
    return { success: false, message: 'Erreur ajout maison' };
  }
}

export async function filterByPrix(minPrix, maxPrix) {
  try {
    return await pb.collection('maison').getFullList({
      filter: `prix >= ${minPrix} && prix <= ${maxPrix}`,
      sort: "-created"
    });
  } catch (error) {
    console.log('Erreur filtre prix', error);
    return [];
  }
}
