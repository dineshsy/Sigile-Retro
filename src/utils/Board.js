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

          .get()
      ).docs.map((document) => document.data());

      return { name, cards, id: doc.id };
    });

    return promises;
  }

  addNewCard(listID, card) {}

  editCard(listID, cardID, content) {}

  toggleLike(listID, cardID) {}

  deleteCard(listID, cardID) {}
}

export default Board;
