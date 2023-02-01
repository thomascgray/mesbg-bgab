## The MESBG Brother's Gray Army Builder

### _An army list builder for the Middle Earth Strategy Battle Game_

# **VERY WIP, check back soon!**

## Features (eventually):

### **Browser based, modern interface, mobile friendly**

- Designed from the ground up to work on a variety of computer screen sizes.
- Edit and display army lists from your phone, easy access for when you're in person.
- Don't need to install any software or run any programs or anything like that.
- I don't want (or care about, to be honest) your data, so no Google Analytics or tracking anywhere.

### **Save rosters to your computer browser's local storage (with an option to export to file)**

- Don't need to worry about exporting army lists or keeping track of the physical files.
- Can still export them if you want to move the army list to another computer, or for your own personal backup.

### **A focus on clean output of the army lists**

- Basically, Battlescribe's outputs make me feel like I'm losing my mind - they're a non-insignificant reason for me building this tool.
- Outputs to a variety of different formats, with several toggles and options for how much you want included in the final output. By default, it's pretty minimal.

### **Supports Tabletop Simulator from the get go**

- Auto calculates which distinct models you're going to need for your army, and builds a BBCode'ified output for each of those models that you can then easily copy and paste onto your TTS army.
- I personally play exclusively on TTS, so I have a vested interest in this not being shit.

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

- battlescribe doesnt support this

[ ] when we render out equipped wargear, etc. we should order them by the order they appear in the listing. e.g if the options say "bow" THEN "horse", if you click horse then bow, it renders as "Horse, Bow" - it should be "Bow, Horse" (the order they appear in the list)

[ ] support buying increases in a heros might, will, and fate for different point costs

- started the data for this

[ ] i THINK mumakil can just be a hero and the warband is any units taht can ride on it, etc.

[ ] wargear needs a separate "summary name", as it can be useful to have 1 name in the listing, and 1 in the summary

- e.g swaps, the final .txt output should maybe say "X (replaces Y)" or something, but the in-app summary should probably just say "X"?

[ ] things to put in data for easy access with TTS

- spells
- special rules

[ ] the word "wargear" sort of just gets thrown around, but it kiiiinda should be something like "choices" or something. it actually accounts for

- optional item additions
- optional item SWAPS
- optional upgrades (which can affect anything)

**Things I Know Are Missing (For Now!):**

- siege engines
- great beast of gorgoroth
