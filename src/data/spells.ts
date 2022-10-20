export enum eSpellDuration {
  Exhaustion,
}

export const spells = {
  AuraOfCommand: {
    key: "AuraOfCommand",
    name: "AuraOfCommand",
    duration: eSpellDuration.Exhaustion,
    preamble: `Harnessing their full strength of mind, the caster bolsters the resolve of those around them, inspiring them to deeds of courage and valour.`,
    description: `This power targets the caster themselves. While this power is in effect, the caster and all friendly models within 6'' automatically pass any Courage tests they are required to make.`,
    channelled: `The range of this power is increased to 12''.`,
  },
  AuraOfDismay: {
    key: "AuraOfDismay",
    name: "AuraOfDismay",
    duration: eSpellDuration.Exhaustion,
    preamble: `Weaving a web of deceit, or some other darker power, the caster conjures the image of what their enemies most fear.`,
    description: `This power targets the caster themself. While this power is in effect, the caster and all friendly models within 6" cause Terror.`,
    channelled: `The range of this power is increased to 12"`,
  },
};
