// Kingdom profiles and management system
class KingdomProfile {
  constructor(userId, username) {
    this.userId = userId;
    this.username = username;
    this.level = 1;
    this.experience = 0;
    this.gold = 0;
    this.kingdom = {
      name: `${username}'s Kingdom`,
      population: 0,
      buildings: [],
      resources: {}
    };
    this.createdAt = new Date();
  }

  gainExperience(amount) {
    this.experience += amount;
    if (this.experience >= this.level * 100) {
      this.levelUp();
    }
  }

  levelUp() {
    this.level += 1;
    this.experience = 0;
  }

  addGold(amount) {
    this.gold += amount;
  }
}

module.exports = KingdomProfile;
