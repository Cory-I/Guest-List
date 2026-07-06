import { useState, useEffect } from "react";
import axios from "axios";
export default function GuestDetails({ guest, onUnselect }) {
  if (!guest) return <h3>Select a guest</h3>;

  return (
    <div>
      <h3>{guest.name}</h3>
      <p>{guest.job}</p>
      <p>{guest.email}</p>
      <p>{guest.phone}</p>
      <p>{guest.bio}</p>
      <button className="guest" onClick={onUnselect}>
        Unslect Guest
      </button>
    </div>
  );
}
