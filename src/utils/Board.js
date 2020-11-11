import { timestamp, firestore } from './firebase';

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

    return promises;
  }

  async addNewCard(listID) {
    const card = { content: null, like: 0 };
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

  toggleLike(listID, cardID) {}

  deleteCard(listID, cardID) {}
}

export default Board;
