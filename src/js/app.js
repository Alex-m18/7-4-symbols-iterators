import Team from './Team';
import Bowman from './Bowman';

const team = new Team();
team.add(new Bowman('bowman'));
team.add(new Bowman('bowman2'));
team.add(new Bowman('bowman3'));
team.add(new Bowman('bowman4'));
team.add(new Bowman('bowman5'));

for (const member of team) {
  console.log(`${member.name} (${member.type})`);
}
