const maniobrasData = {
  "Block": {
    1: {
      nombre: "Basic Parry",
      descripcionCorta: "Blocks 1 melee attack",
      descripcionLarga: "The basic parry maneuver prevents melee attacks from hitting the martial artist. It does not work against missile attacks. A character can perform the basic parry if he has not used both his martial arts attacks for that round. Even if his opponent has initiative, the martial artist can announce that he's using one of his attacks to parry. The martial artist rolls an attack against his opponent, taking into account all normal adjustments to his opponent's AC and the 'Unarmed vs. Armor' conditions described later this chapter. If the attack hits, the martial artist has parried the first blow struck at him this round by his opponent. When the Attack Roll Fails: The incoming attack hits. Weapons Allowed: Any. Characters using sai or jitte weapons receive a +2 on their parry attack rolls."
    },
    2: {
      nombre: "Parry All",
      descripcionCorta: "Costs 2 attacks; blocks all melee attacks",
      descripcionLarga: "This maneuver operates like the basic parry, but the martial artist's attack roll is compared against every melee attack directed at him in that round. If the martial artist's parry attack roll is successful against an incoming attack, that attack is blocked. If the parry roll fails, the attack hits. The martial artist must use both of his attacks for the round to perform this maneuver. Weapons Allowed: Any. Sai and jitte receive a +2 bonus to the parry attack roll."
    },
    3: {
      nombre: "Grappling Block",
      descripcionCorta: "Blocks 1 melee attack; pins weapon",
      descripcionLarga: "This maneuver lets a martial artist trap or pin an attacker's weapon or arm. The martial artist rolls a normal attack roll against his opponent's Armor Class. If the attack succeeds, the incoming attack is stopped and the weapon (or limb) is trapped. A martial artist can trap as many weapons or limbs as he has hands. Once a weapon or limb is trapped, the martial artist's opponent cannot use it. In subsequent rounds, the opponent can try to pull his weapon (or limb) free. If the opponent's Strength is equal to or less than the martial artist's, the attacker must roll a successful saving throw vs. paralyzation to free the weapon. If the opponent has a higher Strength than the martial artist, no saving throw is necessary—the attacker automatically frees his weapon. The martial artist can perform no other action while trapping a weapon. Weapons Allowed: Empty hand, jitte, and sai. (The weapons gain a +2 to hit when attempting this maneuver.)"
    },
    4: {
      nombre: "Arrow Parry",
      descripcionCorta: "Costs 2 attacks; blocks all missile attacks",
      descripcionLarga: "A martial artist must be aware of an incoming missile to parry it. As with Parry All, the martial artist makes an attack roll and compares it to all missile attacks directed at him in that round. The arrow parry does not work against exceptionally large or magical missiles (such as boulders, ballista bolts, or magic missiles). The arrow parry costs the martial artist all his attacks for the round. Weapons Allowed: Empty hands, staff, or polearm."
    }
  },
  "Kick": {
    1: {
      nombre: "Circle Kick",
      descripcionCorta: "Add 1d2 hp to basic damage",
      descripcionLarga: "The martial artist spins and builds momentum to deliver a powerful kick. If the attack hits, the kick inflicts basic martial arts damage plus 1d2 points. Weapons Allowed: Empty hand."
    },
    2: {
      nombre: "Flying Kick",
      descripcionCorta: "Leap; add 1d4 hp to basic damage",
      descripcionLarga: "This kick must be made at the end of a leap. The leap must be at least 5 feet long, but cannot exceed the character's maximum leaping distance. The leaping attack gives the martial artist a +1 bonus to his attack roll and his Damage roll. The flying kick inflicts basic martial arts damage plus 1d4 points. However, if the flying kick misses, the martial artist must roll a successful dexterity check or fall to the ground. He must spend the next round getting to his feet and cannot attack. Weapons Allowed: Empty hand."
    },
    3: {
      nombre: "Backward Kick",
      descripcionCorta: "Kick person behind; basic damage",
      descripcionLarga: "This maneuver allows the martial artist to kick an opponent standing in his rear hemisphere. The attack causes basic martial arts damage. The martial artist can strike without looking at his opponent, and suffers no penalty to his attack roll. Weapons Allowed: Empty hand."
    }
  },
  "Lock": {
    1: {
      nombre: "Choke Hold",
      descripcionCorta: "Takes +1 round; victim passes out",
      descripcionLarga: "The martial artist attempts to apply pressure to his opponent's neck. Once grabbed, the opponent can attempt to break the hold by rolling a successful saving throw vs. paralyzation. If the opponent fails the saving throw, he is choked unconscious at the end of the next round. He remains unconscious for 1d3 rounds. Weapons Allowed: Empty hand, nunchaku."
    },
    2: {
      nombre: "Locking Block",
      descripcionCorta: "Pins weapon/limb; +4 to hit with other attacks",
      descripcionLarga: "This maneuver combines the grappling block and a joint lock. The martial artist blocks an incoming attack, grabs his opponent's limb, and then bends it in a painful manner. The martial artist gains a +4 bonus to hit the trapped character with his remaining attacks. The trapped character can attack the martial artist, but suffers a -4 penalty to his attack roll. As with the grappling block, an opponent with equal or less Strength can escape by rolling a successful saving throw vs. paralyzation. A stronger opponent automatically breaks the hold. Weapons Allowed: Empty hand."
    },
    3: {
      nombre: "Incapacitator",
      descripcionCorta: "Add 1d4 hp to basic damage; limb useless",
      descripcionLarga: "This is a specialized joint lock designed to break or dislocate a limb. To use this maneuver, the martial artist must roll a successful attack. If successful, he inflicts normal martial arts damage plus 1d4 points, and the struck limb is rendered useless. If an arm is incapacitated, the victim cannot use it to hold weapons, shields, etc. If a leg is incapacitated, the victim's movement is reduced by half. The limb remains incapacitated until the victim receives magical healing or rests for 1d4 days. Weapons Allowed: Empty hand."
    },
    4: {
      nombre: "Immobilizing",
      descripcionCorta: "Victim immobilized",
      descripcionLarga: "The martial artist traps his opponent in a hold that causes immense pain if the opponent moves. Both the martial artist and his opponent are immobilized. To escape, the opponent must roll a successful saving throw vs. paralyzation. An opponent with a Strength greater than the martial artist's gains a +4 bonus to the saving throw. If the saving throw succeeds, the hold is broken and both characters are free to move. If the saving throw fails, the opponent is trapped. He can attempt to break the hold once per round. The martial artist can release his opponent at any time. Weapons Allowed: Empty hand."
    }
  },
  "Movement": {
    1: {
      nombre: "Feint",
      descripcionCorta: "Costs extra attack; +3 to hit",
      descripcionLarga: "By using one of his attacks for the round, the martial artist can fake an attack to throw his opponent off balance. The feint costs one attack and gives the martial artist a +3 bonus to his next attack roll. The feint and the attack must both occur in the same round. Weapons Allowed: Any."
    },
    2: {
      nombre: "Prone Fighting",
      descripcionCorta: "Suffer no kneel/sit/prone penalties",
      descripcionLarga: "The martial artist suffers no penalties to his attack roll or Armor Class for fighting while kneeling, sitting, or lying prone. Weapons Allowed: Any."
    },
    3: {
      nombre: "Immovability",
      descripcionCorta: "Save vs. paralyzation to not budge",
      descripcionLarga: "By concentrating on his center of gravity, the martial artist makes himself extremely difficult to move. The character must suffer an attack to use this maneuver. If the attack would normally move the character, knock him down, or throw him, he can roll a saving throw vs. paralyzation to remain standing in place. He can do nothing else in the round he uses this maneuver. Weapons Allowed: Empty hand."
    },
    4: {
      nombre: "Leap",
      descripcionCorta: "Leap great distances",
      descripcionLarga: "The martial artist can leap up to 15 feet straight up or 15 feet forward, plus 1 foot per level of experience. Weapons Allowed: Any."
    },
    5: {
      nombre: "Speed",
      descripcionCorta: "Check Dexterity; result/4-extra attacks",
      descripcionLarga: "The martial artist can move much faster than a normal man. To use this maneuver, the character rolls a Dexterity check. If successful, he divides the die roll by 4 (round down). The result is the number of extra attacks he can make that round. The character can use this maneuver only once per day. Weapons Allowed: Any."
    },
    6: {
      nombre: "Slow Resistance",
      descripcionCorta: "Immune to slow spells",
      descripcionLarga: "The martial artist is completely immune to the effects of the slow spell. Weapons Allowed: Any."
    }
  },
  "Push": {
    1: {
      nombre: "Concentrated Push",
      descripcionCorta: "Push foe 1'/level; knockdown if push over 3'",
      descripcionLarga: "The martial artist pushes his opponent, using the attacker's own weight and momentum against him. The martial artist must roll a successful attack. If the attack hits, the opponent is pushed back 1 foot per level of the martial artist. If the opponent is pushed more than 3 feet, he must roll a successful Dexterity check or fall to the ground. Weapons Allowed: Empty hand, staff, polearm."
    },
    2: {
      nombre: "Sticking Touch",
      descripcionCorta: "While touching, +2 to hit, -2 to AC",
      descripcionLarga: "This maneuver allows the martial artist to maintain constant physical contact with his opponent. The martial artist must be empty-handed and must make a successful attack roll to initiate the sticking touch. Thereafter, as long as the martial artist maintains the touch, he gains a +2 bonus to all attack rolls against that opponent, and his opponent suffers a -2 penalty to attack rolls against the martial artist. The opponent can break the sticking touch by moving out of melee range. Weapons Allowed: Empty hand."
    },
    3: {
      nombre: "One Finger Push",
      descripcionCorta: "Concentrated push at range",
      descripcionLarga: "This maneuver works exactly like the concentrated push, except that the martial artist does not need to touch his opponent. He can push an opponent up to 10 feet away. Weapons Allowed: Empty hand."
    }
  },
  "Strike": {
    1: {
      nombre: "Iron Fist",
      descripcionCorta: "1d6 hp damage plus Strength bonuses with blows",
      descripcionLarga: "The martial artist has hardened his hands by repeatedly striking wood, stone, or iron. The character's empty hand attacks cause 1d6 points of damage. The character can also add his Strength bonuses to the damage. Weapons Allowed: Empty hand."
    },
    2: {
      nombre: "Crushing Blow",
      descripcionCorta: "Break inanimate objects; 1 attack/round",
      descripcionLarga: "This maneuver allows the martial artist to break inanimate objects, such as boards, bricks, and stones. The martial artist must spend one full round concentrating before making the attempt. In the second round, he makes a single attack roll against the object's AC. If successful, he breaks the object. The DM must determine the AC and hit points of the object. Weapons Allowed: Empty hand."
    },
    3: {
      nombre: "Eagle Claw",
      descripcionCorta: "1d8 hp damage plus Strength bonuses; 1 attack/round",
      descripcionLarga: "The martial artist can shatter objects with a crushing grip. The maneuver works exactly like the crushing blow, but the character can use it to destroy objects he is holding. Weapons Allowed: Empty hand."
    }
  },
  "Throw": {
    1: {
      nombre: "Fall",
      descripcionCorta: "Take half damage from falls",
      descripcionLarga: "The martial artist can reduce the damage he takes from a fall by rolling or tucking his body. If the character rolls a successful saving throw vs. paralyzation, he takes only half damage from any fall. Weapons Allowed: Any."
    },
    2: {
      nombre: "Instant Stand",
      descripcionCorta: "Stand quickly (negates 1-round penalty)",
      descripcionLarga: "This maneuver allows a character who has been knocked down to get to his feet instantly. The character rolls a Dexterity check; if successful, he stands up without sacrificing his attacks for that round. If the check fails, he spends the round getting to his feet, as normal. Weapons Allowed: Any."
    },
    3: {
      nombre: "Hurl",
      descripcionCorta: "Throw target 1d4 ; add 1d4 hp damage",
      descripcionLarga: "The martial artist uses his opponent's own weight and momentum to throw him. The martial artist must roll a successful attack. If successful, the opponent is thrown 1d4 feet and suffers normal martial arts damage plus 1d4 points. The opponent must roll a successful Dexterity check or fall prone. Weapons Allowed: Empty hand."
    },
    4: {
      nombre: "Great Throw",
      descripcionCorta: "Throw target 1'/level; 2x base damage",
      descripcionLarga: "This maneuver works like the hurl, except the opponent is thrown 1 foot per level of the martial artist. The throw inflicts twice the character's base martial arts damage. The opponent must roll a successful Dexterity check at a -4 penalty or be knocked prone. Weapons Allowed: Empty hand."
    }
  },
  "Vital Area": {
    1: {
      nombre: "Pain Touch",
      descripcionCorta: "Victim -2 to hit, +2 to AC, for 1d3 rounds",
      descripcionLarga: "By striking a vital nerve cluster, the martial artist inflicts intense pain upon his opponent. The opponent must roll a successful saving throw vs. paralyzation. If the saving throw fails, the victim suffers a -2 penalty to his attack rolls and a +2 penalty to his Armor Class for 1d3 rounds due to the agonizing pain. Weapons Allowed: Empty hand."
    },
    2: {
      nombre: "Stunning Touch",
      descripcionCorta: "Save or be stunned for 1d4 rounds",
      descripcionLarga: "The martial artist strikes a combination of nerve points that overwhelms the victim's nervous system. The opponent must roll a successful saving throw vs. paralyzation. If he fails, he is stunned for 1d4 rounds. A stunned character cannot attack and loses all Dexterity bonuses to his Armor Class. Weapons Allowed: Empty hand."
    },
    3: {
      nombre: "Paralyzing Touch",
      descripcionCorta: "Save at -2 or be paralyzed for 2d4 rounds",
      descripcionLarga: "This strike blocks the flow of energy or nerve impulses to the victim's limbs. The opponent must roll a successful saving throw vs. paralyzation with a -2 penalty. If the saving throw fails, the victim is completely paralyzed for 2d4 rounds. He cannot move or speak. Weapons Allowed: Empty hand."
    },
    4: {
      nombre: "Distance Death",
      descripcionCorta: "Pain, stunning, paralyzation, or 2x base damage at range",
      descripcionLarga: "This legendary maneuver allows the martial artist to project his spiritual energy (Ch'i) to strike vital areas from a distance. The martial artist can cause the effects of a pain touch, stunning touch, paralyzing touch, or double base damage against any target up to 15 feet away. The target receives a normal saving throw (if applicable) to resist the effects. This maneuver can be used only once per day. Weapons Allowed: Empty hand."
    }
  },
  "Weapon": {
    1: {
      nombre: "Weapon Breaker",
      descripcionCorta: "Automatically breaks normal weapons",
      descripcionLarga: "The martial artist uses a specialized weapon or technique designed to snap an opponent's blade. The martial artist makes a normal attack roll against his opponent's weapon. If successful, any normal, nonmagical weapon must roll a successful saving throw vs. crushing blow or be shattered. Magical weapons receive a bonus to their saving throw equal to their magical enchantment modifier. Weapons Allowed: Sai, jitte, or empty hand (if the character has the Iron Fist maneuver)."
    },
    2: {
      nombre: "Steel Cloth",
      descripcionCorta: "Wield 6'-10' cloth as normal spear",
      descripcionLarga: "The martial artist can infuse a long strip of cloth, such as a scarf or cloak, with his Ch'i, causing it to become rigid and sharp. The cloth can be wielded in combat as if it were a normal spear, inflicting 1d6 points of damage. When the character stops concentrating, the cloth returns to its normal flexible state. Weapons Allowed: Long cloth or scarf."
    }
  },
  "Mental and Physical Training": {
    1: {
      nombre: "Meditation",
      descripcionCorta: "1 hour meditation = 2 hours sleep",
      descripcionLarga: "By replacing standard rest with deep psychophysical concentration, the martial artist can revitalize their body and mind at an accelerated rate. A single hour spent in this meditative trance provides the character with the exact benefits of two full hours of regular sleep. Weapons Allowed: None required."
    },
    2: {
      nombre: "All-Around Sight",
      descripcionCorta: "Aware of attacks from all around",
      descripcionLarga: "Through rigorous sensory training, the martial artist is completely aware of movements and threats coming from any direction. The character cannot be blindsided, eliminating the standard combat benefits opponents normally gain when attacking from behind or flanking. Weapons Allowed: None required."
    },
    3: {
      nombre: "Mental Resistance",
      descripcionCorta: "+2 on saving throws against mental attacks",
      descripcionLarga: "The character's intense mental discipline grants them an exceptional defense against telepathic intrusion, charms, illusions, and other forms of psychological or psychic assault. The martial artist receives a permanent +2 bonus on all saving throws made against mental attacks. Weapons Allowed: None required."
    },
    4: {
      nombre: "Ch'i Attacks",
      descripcionCorta: "Can hit as if a magical weapon",
      descripcionLarga: "By channeling their inner spiritual energy into their unarmed strikes, the martial artist can bypass the defenses of supernatural creatures. Their empty-handed attacks are treated as magical weapons for the purpose of determining what creatures they can hit or damage. Weapons Allowed: Empty hand. <p> <table><tr><th>XP Level</th><th>Character Hits As A</th></tr><tr><td>1-4</td><td>magical weapon</td></tr><tr><td>5-9</td><td>+1 magical weapon</td></tr><tr><td>10-14</td><td>+2 magical weapon</td></tr><tr><td>15-19</td><td>+3 magical weapon</td></tr><tr><td>20</td><td>+4 magical weapon</td><tr/></table>"
    },
    5: {
      nombre: "Blind Fighting",
      descripcionCorta: "Only -1 when fighting in darkness",
      descripcionLarga: "The martial artist can fight effectively using sound, scent, and air currents. When combat occurs in absolute darkness, thick fog, or against invisible foes, the character suffers only a minor -1 penalty to their attack rolls, completely overriding the harsher standard penalties. Weapons Allowed: Any."
    },
    6: {
      nombre: "Ironskin",
      descripcionCorta: "-2 to AC when not wearing armor",
      descripcionLarga: "Through physical conditioning and a specialized breathing technique that hardens the flesh against impact, the character is naturally resilient. As long as the martial artist is not wearing any type of physical armor, they receive a permanent -2 bonus (reduction) to their Armor Class. Weapons Allowed: None required. Cannot be combined with any other type of armor."
    },
    7: {
      nombre: "Levitation",
      descripcionCorta: "Float 5'/round/experience level",
      descripcionLarga: "This is perhaps the rarest of all the martial arts maneuvers because it requires the utmost concentration and mental discipline. Daily the martial artist practices at making her body feel lighter, using mental power to negate her own weight. Finally, the character succeeds in overcoming all her weight and can levitate for a number of rounds equal to her experience level. This maneuver requires one turn of concentration before it takes effect. Thereafter the character can move up, down, or sideways at a rate of 5 feet per round. She can take no actions while levitating and will fall to the ground if her concentration is broken. On completion of the levitation, the character must rest for one round before taking any other action."
    }
  }
};
