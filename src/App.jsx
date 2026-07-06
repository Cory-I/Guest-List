import { useState, useEffect } from "react";
import axios from "axios";
import GuestDetails from "./GuestDetails.jsx";
export default function App() {
  const [guests, setGuests] = useState([]);
  const [selectedGuest, setSelectedGuest] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2605-ftb-et-web-ft/guests",
        );
        console.log(response);
        setGuests(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchDetails = async (id) => {
      try {
        const response = await axios.get(
          `https://fsa-crud-2aa9294fe819.herokuapp.com/api/2605-ftb-et-web-ft/guests/${id}`,
        );
        console.log(response);
        selectedGuest(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    if (selectedGuest) {
      fetchDetails(selectedGuest.id);
    }
  }, [selectedGuest]);

  return (
    <div>
      <h2>List of Guests</h2>
      {guests.map((guest) => (
        <div key={guest.id}>
          <button className="guest" onClick={() => setSelectedGuest(guest)}>
            {guest.name}
          </button>
        </div>
      ))}
      <div>
        <GuestDetails
          guest={selectedGuest}
          onUnselect={() => setSelectedGuest(null)}
        />
      </div>
    </div>
  );
}
