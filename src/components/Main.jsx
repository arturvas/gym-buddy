import React from 'react';
import { ListPlus } from 'lucide-react';

export default function Main() {
  const muscles = ['leg', 'shoulder', 'trapeze'];

  const musclesList = muscles.map((muscle) => {
    return <li key={muscle}>{muscle}</li>;
  });

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newMuscle = formData.get('muscle');
    muscles.push(newMuscle);
    console.log(muscles);
  }

  return (
    <main>
      <form className="add-muscle-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="e.g. legs" aria-label="Add muscle" name="muscle" />
        <button>
          <ListPlus size={25} strokeWidth={1.7} />
          Add muscle
        </button>
      </form>

      <section className="training-wish-list">
        <h2>Training wish:</h2>
        <ul>{musclesList}</ul>
      </section>

      <section className="get-training-sheet">
        <div>
          <h3>Ready for a training sheet?</h3>
          <p>Generate a training sheet from your list</p>
        </div>
        <button>Get a training sheet</button>
      </section>
    </main>
  );
}
