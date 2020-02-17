$(() => {
  window.fishtank = new Fishtank('fishtank');
  window.fishtank.registerSpecies(SwitchFish, GoFish, BiteFish);
  let starter = new Starter({
    tank: window.fishtank,
    position: new Vector(0, 0)
  });
});
