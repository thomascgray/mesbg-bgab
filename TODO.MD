wip

adding 3rd column to view for army list printout
making siege teams work
some way to represent buying new siege crew members
some way to represent buying a siege engine captain (and having him be a hero? and replacing one of the warriors?)

**TODO**

[x] Durin having khazad guard that get the upgrade

- basically, upgrades that can affect stats and wargear and names

[x] Gildor Inglorion getting exiles

[x] adding independent heros as warband

[x] calculate bow limits per force in the army

[x] upgrading units allowing changes to any of the stats of a unit

    - this is sorta working; us having a "key" against models breaks lodash defaults deep (what the fuck lol) so atm we're only "overriding" what we need; look into changing our usages of the word "key" i guess? maybe fucking "MESBGserial"?lmao

[x] units allowing new HEROES to join the army (balin the dwarf) at new heroic tiers

    - Balin (for khazad dun) allows members of the fellowship to join at a different heroic tier than what they normally are, for example (and some from the erebor list, too)
      - p.s battlescribe doesnt support this!

[ ] when we render out equipped wargear, etc. we should order them by the order they appear in the listing. e.g if the options say "bow" THEN "horse", if you click horse then bow, it renders as "Horse, Bow" - it should be "Bow, Horse" (the order they appear in the list)

[ ] heroes too, put heroes of valour at the top, and THEN order by index, etc.

    - we already order by heor tier, but should _also_ order by index

[x] `swapTo` needs to be an array, the same as `swapFrom`

[x] support buying increases in a heros might, will, and fate for different point costs

    - made allowPurchaseMi, allowPurchaseWi, allowPurchaseFa against models, use this

[x] i THINK mumakil can just be a hero and the warband is any units taht can ride on it, etc.

[ ] wargear needs a separate "summary name", as it can be useful to have 1 name in the listing, and 1 in the summary

    - e.g swaps, the final .txt output should maybe say "X (replaces Y)" or something, but the in-app summary should probably just say "X"?

[ ] things to put in data for easy access with TTS

    - spells
    - special rules

[ ] ~~the word "wargear" sort of just gets thrown around, but it kiiiinda should be something like "choices" or something. it actually accounts for~~

    - optional item additions
    - optional item SWAPS
    - optional upgrades (which can affect anything)

[x] DruzhagTheBeastcaller mayfield Fell Warg and Giant Spider (both in hobbit book)

[x] askrak mayfield

[ ] add spells

[x] moria goblin drum needs a profile but DOESNT count as a follower lmao, fucking rule exceptions

[x] profile renderer only showing effective quantity and name if they're NOT a warrior, for some reason?

[x] Mauhur of isenguard upgrading scouts into marauders

[ ] profiles having their own wargear options

- e.g uruk hai demolition team - each of the warriors can take a flaming brand, and this needs to be handled separately for the purpose of building TTS data

[ ] urukhai demolition team and uruk hai assault ballista

[ ] include khandish chariot in descriptions somehow

[ ] mumak beast master upgrade needs to replace profile of commander

[ ] mumak of far harad needs to copy mumak of harad with beast master thing preselected always

[ ] saving and loading armies and army data management

x] siege engines need a thing where the ONLY warband they list out is on their profiles or something

[] siege engines need a thing where they can select the captain upgrade thing

[] the profile specific options need to apply to JUST the profile, not the whole model
**Things I Know Are Missing (For Now!):**

    - siege engines
      - An army, or allied contingent, may only include one Siege
    Engine for each Hero with a Heroic Tier of Hero of
    Fortitude or above.

# NOTES

### `data/armies.ts`

Definitions for the armies themselves. Defines what models they can field by default (so, what heroes appear and what warbands appear under those heroes)

### `data/models.ts`

All the actual models and all their stuff.

These get (as you can imagine) quite complex to handle the many different scenarioes.

- models have `wargear`, and then `wargearFrom`. this is because past-tom is an idiot who doesn't know how to name things.
  - wargear\* is stuff thats AVAILABLE
  - wargearFrom\* is stuff thats SELECTED and should be factored when calculating points, etc.
