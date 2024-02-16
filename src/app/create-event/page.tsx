'use client';

import React from "react";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";

export default function CreateEventPage() {
  const team = [
    { name: "John Doe", id: 1 },
    { name: "Jane Doe", id: 2 },
    { name: "John Smith", id: 3 },
    { name: "Jane Smith", id: 4 },
    { name: "John Johnson", id: 5 },
    { name: "Jane Johnson", id: 6 },
  ];

  return (
    <Autocomplete
      defaultItems={team}
      label="Team Member"
      placeholder="Search a team member"
      className="max-w-xs"
    >
      {(member) => (
        (<AutocompleteItem key={member.id}>{member.name}</AutocompleteItem>)
      )}
    </Autocomplete>
  );
}
