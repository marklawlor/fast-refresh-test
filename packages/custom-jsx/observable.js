export function observable(value, { fallback, name } = {}) {
  const effects = new Set();

  return {
    name,
    get(effect) {
      if (effect) {
        // Subscribe the effect to the observable
        effects.add(effect);
        effect.dependencies.add(() => effects.delete(effect));
      }
      return value ?? fallback?.get(effect);
    },

    set(newValue) {
      if (Object.is(newValue, value)) return;
      value = newValue;
      // We changed, so rerun all subscribed effects
      // We need to copy the effects set because rerunning an effect might resubscribe it
      for (const effect of Array.from(effects)) {
        effect.run();
      }
    },
  };
}

export function cleanupEffect(effect) {
  for (const dep of Array.from(effect.dependencies)) {
    dep();
  }
  effect.dependencies.clear();
}
