import {
  timestamp,
  firestore,
  auth,
  arrayRemove,
  arrayUnion,
} from './firebase';

class Board {
  boradName = 'Retrospective';

  async getLists() {
    const promises = (
      await firestore
        .collection(this.boradName)
        .orderBy('createdAt', 'asc')
        .get()
    ).docs.map(async (doc) => {
      const name = doc.data().name;
      const cards = (
        await doc.ref
          .collection('cards')
          .orderBy('createdAt', 'desc')
          .get()
      ).docs.map((document) => ({
        ...document.data(),
        id: document.id,
      }));

      return { name, cards, id: doc.id };
    });

    console.log();
    return promises;
  }

  async addNewCard(listID) {
    const card = { content: null, like: [] };
    return await firestore
      .collection(this.boradName)
      .doc(listID)
      .collection('cards')
      .add({ ...card, createdAt: timestamp() });
  }

  async editCard(listID, cardID, content) {
    return await firestore
      .collection(this.boradName)
      .doc(listID)
      .collection('cards')
      .doc(cardID)
      .update({
        content: content,
      });
  }

  async toggleLike(listID, cardID, likes) {
    const uid = auth.currentUser.uid;
    if (likes.includes(uid)) {
      return await firestore
        .collection(this.boradName)
        .doc(listID)
        .collection('cards')
        .doc(cardID)
        .update({
          like: arrayRemove(uid),
        });
    } else {
      return await firestore
        .collection(this.boradName)
        .doc(listID)
        .collection('cards')
        .doc(cardID)
        .update({
          like: arrayUnion(uid),
        });
    }
  }

  async deleteCard(listID, cardID) {
    return await firestore
      .collection(this.boradName)
      .doc(listID)
      .collection('cards')
      .doc(cardID)
      .delete();
  }
}

export default Board;
