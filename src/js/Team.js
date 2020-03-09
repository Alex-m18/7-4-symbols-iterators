/**
 * Team class. Includes members set without doubles
 * @class
 */
class Team {
  constructor() {
    this.members = new Set();
  }

  /**
   * Add new unique character in the team members set
   * @param {Character} character
   * @throws if character is in the members set already
   */
  add(character) {
    if (this.members.has(character)) {
      throw new Error('Character is in the members set already');
    }
    this.members.add(character);
  }

  /**
   * Add some new unique characters in the team members set
   * @param  {...Character} rest
   */
  addAll(...rest) {
    for (const character of rest) this.members.add(character);
  }

  /**
   * Returns team members as array
   */
  toArray() {
    return [...this.members];
  }

  [Symbol.iterator]() {
    const membersArray = this.toArray();
    let current = 0;
    const last = membersArray.length - 1;
    return {
      next() {
        if (current <= last) {
          current += 1;
          return {
            done: false,
            value: membersArray[current - 1],
          };
        }
        return { done: true };
      },
    };
  }
}

export default Team;
