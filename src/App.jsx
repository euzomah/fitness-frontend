import { useEffect, useState } from "react";

const API_URL = "https://sliwhg53yf.execute-api.us-east-1.amazonaws.com/prod";

export default function App() {
  const [workouts, setWorkouts] = useState([]);
  const [exercise, setExercise] = useState("");
  const [weight, setWeight] = useState("");
  const [reps, setReps] = useState("");
  const [notes, setNotes] = useState("");
  const userId = "elvis";

  // Fetch workouts
  const fetchWorkouts = async () => {
    try {
      const res = await fetch(`${API_URL}/workouts?userId=${userId}`);
      const data = await res.json();
      setWorkouts(data.items || []);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  useEffect(() => {
    fetchWorkouts();
  }, []);

  // Add workout
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch(`${API_URL}/workouts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          exercise,
          weight,
          reps,
          notes,
          userId,
        }),
      });

      setExercise("");
      setWeight("");
      setReps("");
      setNotes("");

      fetchWorkouts();
    } catch (err) {
      console.error("Save failed:", err);
    }
  };

  // DELETE workout
  const deleteWorkout = async (workoutId) => {
    try {
      await fetch(`${API_URL}/workouts/${workoutId}`, {
        method: "DELETE",
      });

      fetchWorkouts();
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  return (
    <div style={{ padding: "40px", maxWidth: "700px", margin: "auto" }}>
      <h1>Fitness API Frontend</h1>

      {/* Add Workout Form */}
      <form onSubmit={handleSubmit} style={{ marginBottom: "40px" }}>
        <input
          placeholder="Exercise"
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
          required
        />
        <br />

        <input
          placeholder="Weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
        />
        <br />

        <input
          placeholder="Reps"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
          required
        />
        <br />

        <input
          placeholder="Notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
        <br />

        <button type="submit">Save Workout</button>
      </form>

      {/* Workout List */}
      {workouts.map((item) => (
        <div
          key={item.workoutId}
          style={{
            padding: "15px",
            marginBottom: "15px",
            border: "1px solid #ddd",
            borderRadius: "10px",
          }}
        >
          <h3>
            {item.exercise} — {item.weight} lbs x {item.reps} reps
          </h3>

          {item.notes && <p>Notes: {item.notes}</p>}

          <button
            onClick={() => deleteWorkout(item.workoutId)}
            style={{
              background: "#ff4d4d",
              color: "white",
              border: "none",
              padding: "6px 12px",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Delete Workout
          </button>
        </div>
      ))}
    </div>
  );
}
