export const rooms = [
  {
    id: 'living-room',
    name: 'Living Room',
    occupied: false,
    lights: [
      { id: 'floor-lamp', name: 'Floor Lamp', on: true },
      { id: 'ceiling', name: 'Ceiling Light', on: false },
    ],
  },
  {
    id: 'kitchen',
    name: 'Kitchen',
    occupied: false,
    lights: [{ id: 'main-light', name: 'Main Light', on: true }],
  },
  {
    id: 'bedroom',
    name: 'Bedroom',
    occupied: true,
    lights: [{ id: 'bedside', name: 'Bedside Lamp', on: false }],
  },
  {
    id: 'bathroom',
    name: 'Bathroom',
    occupied: false,
    lights: [],
  },
]
