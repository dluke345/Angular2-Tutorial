import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
  { id: 1, name: 'Luke Skywalker', age: 25, damage: 20, health: 100, skill: 'Jedi', alliance: 'Rebel' },
  { id: 2, name: 'Darth Vader', age: 60, damage: 18, health: 100, skill: 'Jedi', alliance: 'Imperial' },
  { id: 3, name: 'Han Solo', age: 50, damage: 17, health: 100, skill: 'Rebel', alliance: 'Rebel' },
  { id: 4, name: 'Yoda', age: 1245, damage: 25, health: 100, skill: 'Jedi', alliance: 'Rebel' },
  { id: 5, name: 'Boba Fett', age: 40, damage: 16, health: 100, skill: 'Bounty Hunter', alliance: 'Neutral' },
  { id: 6, name: 'Obi-Wan Kenobi', age: 45, damage: 17, health: 100, skill: 'Jedi', alliance: 'Rebel' },
  { id: 7, name: 'R2-D2', age: 200, damage: 5, health: 100, skill: 'Droid', alliance: 'Rebel' },
  { id: 8, name: 'Jabba The Hutt', age: 120, damage: 1, health: 100, skill: 'Crime Lord', alliance: 'Imperial' },
  { id: 9, name: 'Chewbacca', age: 48, damage: 17, health: 100, skill: 'Fighter', alliance: 'Rebel' },
  { id: 10, name: 'C-3PO', age: 180, damage: 5, health: 100, skill: 'Droid', alliance: 'Rebel' },
  { id: 11, name: 'Kylo Ren', age: 33, damage: 19, health: 100, skill: 'Jedi', alliance: 'Imperial' },
  { id: 12, name: 'The Emperor', age: 110, damage: 12, health: 100, skill: 'Jedi', alliance: 'Imperial' },
  { id: 13, name: 'General Grievous', age: 148, damage: 16, health: 100, skill: 'Droid Jedi', alliance: 'Imperial' }
];
  return {heroes};
  }
}
