console.log ("Working...");
const Discord = require('discord.js');
const bot = new Discord.Client();
//========================== CARDS =========================//
bot.on('message', (message) => {

  //============== 5 STARS ==============//
                if(message.content == '--eren5') {
                  const embed = new Discord.RichEmbed()
                    .setTitle("UNIT DETAILS")
                    .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
                    .setColor(0xff0000)
                    .setDescription("**Name** : Eren Jeager, Survey Corps.\n**Rarity** : ★★★★★.\n**Tags** : Survey Corps.\n**SP Cost** : 5.")
                    .addField("-------","**Attribute** : <:redlotus:609770604299812884> Crimson.\n**Ability** : <:None:609767858364481589> No Ability\n**Attack type** : <:Assault:609769649281957897> 3D maneuver (single/offensive).\nApproach the enemy and launch a single attack with high damage. The number of consecutive attacks is 1.")
                    .addBlankField()
                    .setImage("https://cdn.discordapp.com/attachments/596436269110657086/596436488279949324/stand_000064.png")
                    .setThumbnail("https://cdn.discordapp.com/attachments/596408171346657304/596408345028722689/card_000064.png")
                    .addField("Leader Skill",
                      "The attack power of all the crimson units in the deck is increased by 10% during the battle.")
                    .addField("Potential Skill", "The damage to the enemy is always increased by 5% during the battle.", true)
                    .addField("SP Skill", " Eren turns into Titan at specified location.\nSP Video --> https://youtu.be/ySxK3OQBPs", true)
                    .addBlankField()
                    .addField("65 LVL Stats", "**HP** : 6442.\n**Offensive Power** : 9642.\n**Consecutive attacks** : 1.\n**Flight Speed** : 360.\n**Running Speed** : 120.\n**Flying HP reduction speed** : 8.0%/s.", true)
                    .addBlankField()
                    .addField("Damage Calcs made by *Rose and Mystic*", "**Base Atk**: 10694\n\n**Atk with Knowledge**: 12298\n\n**Atk with Knowledge + Above Gear Req**: 14758\n\n**Atk with Knowledge + Above Gear Req + Advantage**: 21174\n\n**Atk with Knowledge + Above Gear Req + Petra lead**: 17067\n\n**Atk with Knowledge + Above Gear Req + Petra lead + Advantage**: 23484\n\n**Atk with Knowledge + Above Gear Req + Erwin lead**: 17324\n\n**Atk with Knowledge + Above Gear Req + Erwin lead + Advantage**: 23741\n\n**Atk with Knowledge + Above Gear Req + Petra & Erwin lead**: 19634\n\n**Atk with Knowledge + Above Gear Req + Petra & Erwin lead + Advantage**: 26051", true)
                    .addBlankField()
                    .addField("SP Damage Calcs made by *Rose and Mystic*","**SP Type**: Titan form\n\n**SP Charge**: 0.798%/s\n\n**Base Titan HP**: 40384\n\n**Titan HP Loss**: 2.0%/s\n\n**Base SP Damage**: 12493\n\n**SP Dmg with Knowledge**: 14367\n\n**SP Dmg with Knowledge + Above Gear Req**: 17240\n\n**SP Dmg with Knowledge + Above Gear Req + Advantage**: 24736\n\n**SP Dmg with Knowledge + Above Gear Req + Petra lead**: 19939\n\n**SP Dmg with Knowledge + Above Gear Req + Petra lead + Advantage**: 27435\n\n**SP Dmg with Knowledge + Above Gear Req + Erwin lead**: 20239\n\n**SP Dmg with Knowledge + Above Gear Req + Erwin lead + Advantage**: 27734\n\n**SP Dmg with Knowledge + Above Gear Req + Petra & Erwin lead**: 22937\n\n**SP Dmg with Knowledge + Above Gear Req + Petra & Erwin lead + Advantage**: 30433", true)

                    message.channel.send({embed});
                }
                if(message.content == '--levi5') {
                  const embed = new Discord.RichEmbed()
                    .setTitle("**UNIT DETAILS**")
                    .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
                    .setColor(0x260652)
                    .setDescription("**Name** : Levi, Soldier Commander.\n**Rarity** : ★★★★★.\n**Tags** : Survey Corps.\n**SP Cost** : 5.")
                    .addField("-------","**Attribute**  : <:jetblack:609770604270452769> Jet Black.\n**Ability** : <:Drive:609767858150309910> Drive.\n**Attack type** : <:Assault:609769649281957897> 3D maneuver (single/offensive).\nApproach the enemy and launch a single attack that increases the damage with each stroke.")
                    .addBlankField()
                    .setImage("https://cdn.discordapp.com/attachments/596426169369493532/596426235857600544/stand_000077.png")
                    .setThumbnail("https://cdn.discordapp.com/attachments/596378785742585877/596406674760400907/card_000077.png")
                    .addField("Leader Skill",
                      "Increase the attack force of all jet Black units in the deck by 10% during the battle.")
                    .addField("Potential Skill", "The damage to the enemy is always increased by 5% during the battle.", true)
                    .addField("SP Skill", "Cause minor damage to the enemy in the specified range.\nSP Video --> https://www.youtube.com/watch?v=JMB1puKXLJk", true)
                    .addBlankField()
                    .addField("65 LVL Stats", "**HP** : 7428.\n**Offensive Power** : 1094.\n**Consecutive attacks** : 5.\n**Flight Speed** : 360.\n**Running Speed** : 120.\n**Flying HP reduction speed** : 4.0%/s.", true)
                    .addBlankField()
                    .addField("Damage Calcs made by *Rose and Mystic*", "**Base Atk**: 1357\n\n**Atk with Knowledge**: 1561\n\n**Atk with Knowledge + Above Gear Req**: 1873, 7492, 13111, 18730, 24349\n\n**Atk with Knowledge + Above Gear Req + Advantage**: 2687, 10748, 18809, 26870, 34931\n\n**Atk with Knowledge + Above Gear Req + Petra lead**: 2166, 8664, 15162, 21660, 28158\n\n**Atk with Knowledge + Above Gear Req + Petra lead + Advantage**: 2980, 11920, 20860, 29800, 38740\n\n**Atk with Knowledge + Above Gear Req + Erwin lead**: 2198, 8793, 15388, 21983, 28578\n\n**Atk with Knowledge + Above Gear Req + Erwin lead + Advantage**: 3013, 12322, 21631, 30940, 40249\n\n**Atk with Knowledge + Above Gear Req + Petra & Erwin lead**: 2491, 9964, 17437, 24910, 32383\n\n**Atk with Knowledge + Above Gear Req + Petra & Erwin lead + Advantage**: 3306, 13224, 23142, 33060, 42978", true)
                    .addBlankField()
                    .addField("SP Damage Calcs made by *Rose and Mystic*","**SP Type**: 18m wide Zone\n\n**SP Charge**: 1%/s\n\n**Base SP Damage**: 59716\n\n**SP Dmg with Knowledge**: 68673\n\n**SP Dmg with Knowledge + Above Gear Req**: 82408\n\n**SP Dmg with Knowledge + Above Gear Req + Advantage**: 118238\n\n**SP Dmg with Knowledge + Above Gear Req + Petra lead**: 95307\n\n**SP Dmg with Knowledge + Above Gear Req + Petra lead + Advantage**: 131136\n\n**SP Dmg with Knowledge + Above Gear Req + Erwin lead**: 96740\n\n**SP Dmg with Knowledge + Above Gear Req + Erwin lead + Advantage**: 132570\n\n**SP Dmg with Knowledge + Above Gear Req + Petra & Erwin lead**: 109639\n\n**SP Dmg with Knowledge + Above Gear Req + Petra & Erwin lead + Advantage**: 145468", true)

                    message.channel.send({embed});
                }
                if(message.content == '--oluo5') {
                  const embed = new Discord.RichEmbed()
                    .setTitle("UNIT DETAILS")
                    .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
                    .setColor(0xadadad)
                    .setDescription("**Name** : Oluo Bolzado, Levi's Group.\n**Rarity** : ★★★★★.\n**Tags** : Survey Corps.\n**SP Cost** : 4.")
                    .addField("-------","**Attribute** : <:silver:609770604048023573> Silver.\n**Ability** : <:None:609767858364481589> No Ability.\n**Attack type** : <:Assault:609769649281957897> 3D maneuver (single/offensive).\nApproach the enemy and launch a single attack.")
                    .addBlankField()
                    .setImage("https://cdn.discordapp.com/attachments/596436269110657086/596436433422647335/stand_000030.png")
                    .setThumbnail("https://cdn.discordapp.com/attachments/596408171346657304/596408275151487004/card_000030.png")
                    .addField("Leader Skill",
                      "Increase the maximum HP of the all units with the 'Survey Corps' tag in the deck by 40% during the battle.")
                    .addField("Potential Skill", "The damage to the enemy is always increased by 5% during the battle.", true)
                    .addField("SP Skill", "Increase his own attack force at the time of deployment, and also raises his own attack force depending on the number of ally units on the field.\nSP Video --> https://youtu.be/EniXXfgu6c4", true)
                    .addBlankField()
                    .addField("65 LVL Stats", "**HP** : 2777.\n**Offensive Power** : 5273.\n**Consecutive attacks** : 3.\n**Flight Speed** : 360.\n**Running Speed** : 120.\n**Flying HP reduction speed** : 5.0%/s.", true)
                    .addBlankField()
                    .addField("Damage Calcs made by *Rose and Mystic*", "**Base Atk**: 5364\n\n**Atk with Knowledge**: 6169\n\n**Atk with Knowledge + Above Gear Req**: 7402\n\n**Atk with Knowledge + Above Gear Req + Advantage**: 10621\n\n**Atk with Knowledge + Above Gear Req + Petra lead**: 8561\n\n**Atk with Knowledge + Above Gear Req + Petra lead + Advantage**: 11779\n\n**Atk with Knowledge + Above Gear Req + Erwin lead**: 8690\n\n**Atk with Knowledge + Above Gear Req + Erwin lead + Advantage**: 11908\n\n**Atk with Knowledge + Above Gear Req + Petra & Erwin lead**: 9848\n\n**Atk with Knowledge + Above Gear Req + Petra & Erwin lead + Advantage**: 13067", true)

                    message.channel.send({embed});
                }
                if(message.content == '--mikasa5') {
                  const embed = new Discord.RichEmbed()
                    .setTitle("UNIT DETAILS")
                    .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
                    .setColor(0x260652)
                    .setDescription("**Name** : Mikasa Ackerman, Survey Corps.\n**Rarity** : ★★★★★.\n**Tags** : Survey Corps.\n**SP Cost** : 5.")
                    .addField("-------","**Attribute** : <:jetblack:609770604270452769> Jet Black.\n**Ability** : <:None:609767858364481589> No Ability.\n**Attack type** : <:AOE:609769494105161729> 3D maneuver (single/offensive).\nAttack enemy and all enemies around it.")
                    .addBlankField()
                    .setImage("https://cdn.discordapp.com/attachments/596436269110657086/596436506738950150/stand_000065.png")
                    .setThumbnail("https://cdn.discordapp.com/attachments/596408171346657304/596408379803435057/card_000065.png")
                    .addField("Leader Skill",
                      "Increase the SP gauge amount of all units with the 'Survey Corps' tag in the deck by 40% at the start of the battle.")
                    .addField("Potential Skill", "The damage to the enemy is always increased by 5% during the battle.", true)
                    .addField("SP Skill", "Cause minor damage to the enemy in the range of the specified direction, starting from the base.\nSP Video --> https://youtu.be/XeY9N8Th-R8", true)
                    .addBlankField()
                    .addField("65 LVL Stats", "**HP** : 9708.\n**Offensive Power** : 4012.\n**Consecutive attacks** : 3.\n**Flight Speed** : 360.\n**Running Speed** : 120.\n**Flying HP reduction speed** : 4.0%/s.", true)
                    .addBlankField()
                    .addField("Damage Calcs made by *Rose and Mystic*", "**Base Atk**: 4512\n\n**Atk with Knowledge**: 5189\n\n**Atk with Knowledge + Above Gear Req**: 6227\n\n**Atk with Knowledge + Above Gear Req + Advantage**: 8934\n\n**Atk with Knowledge + Above Gear Req + Petra lead**: 7201\n\n**Atk with Knowledge + Above Gear Req + Petra lead + Advantage**: 9908\n\n**Atk with Knowledge + Above Gear Req + Erwin lead**: 7309\n\n**Atk with Knowledge + Above Gear Req + Erwin lead + Advantage**: 10017\n\n**Atk with Knowledge + Above Gear Req + Petra & Erwin lead**: 8284\n\n**Atk with Knowledge + Above Gear Req + Petra & Erwin lead + Advantage**: 10991", true)
                    .addBlankField()
                    .addField("SP Damage Calcs made by *Rose and Mystic*","**SP Type**: 96m x 18m Rotating Zone\n\n**SP Charge**: 1.120%/s\n\n**Base SP Damage**: 59953\n\n**SP Dmg with Knowledge**: 68946\n\n**SP Dmg with Knowledge + Above Gear Req**: 82735\n\n**SP Dmg with Knowledge + Above Gear Req + Advantage**: 118707\n\n**SP Dmg with Knowledge + Above Gear Req + Petra lead**: 95685\n\n**SP Dmg with Knowledge + Above Gear Req + Petra lead + Advantage**: 131657\n\n**SP Dmg with Knowledge + Above Gear Req + Erwin lead**: 97124\n\n**SP Dmg with Knowledge + Above Gear Req + Erwin lead + Advantage**: 133096\n\n**SP Dmg with Knowledge + Above Gear Req + Petra & Erwin lead**: 110074\n\n**SP Dmg with Knowledge + Above Gear Req + Petra & Erwin lead + Advantage**: 146046", true)

                    message.channel.send({embed});
                }
                if(message.content == '--erwin5') {
                  const embed = new Discord.RichEmbed()
                    .setTitle("UNIT DETAILS")
                    .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
                    .setColor(0xebc700)
                    .setDescription("**Name** : Erwin Smith, Survey Corps 13th Delegate.\n**Rarity** : ★★★★★.\n**Tags** : Survey Corps.\n**SP Cost** : 5.")
                    .addField("-------","**Attribute** : <:gold:609770604249481216> Gold.\n**Ability** : <:None:609767858364481589> No Ability.\n**Attack type** : <:Assault:609769649281957897> 3D maneuver (single/offensive).\nApproach the enemy and hit once. Launch a single attack of great damage.")
                    .addBlankField()
                    .setImage("https://cdn.discordapp.com/attachments/596436269110657086/596436334298529792/stand_000009.png")
                    .setThumbnail("https://cdn.discordapp.com/attachments/596408171346657304/596408235280302100/card_000009.png")
                    .addField("Leader Skill",
                      "Increase the attack strength of all units in the deck with the 'Survey Corps' tag by 20% during the battle.")
                    .addField("Potential Skill", "The damage to the enemy is always increased by 5% during the battle.", true)
                    .addField("SP Skill", "Restrein up to 4 enemies in the specified range for a certain amount of time.\nSP Video --> https://youtu.be/-RQ0f3b-mvE", true)
                    .addBlankField()
                    .addField("65 LVL Stats", "**HP** : 5480.\n**Offensive Power** : 11101.\n**Consecutive attacks** : 1.\n**Flight Speed** : 360.\n**Running Speed** : 120.\n**Flying HP reduction speed** : 8.0%/s.", true)
                    .addBlankField()
                    .addField("Damage Calcs made by *Rose and Mystic*", "**Base Atk**: 13694\n\n**Atk with Knowledge**: 15748\n\n**Atk with Knowledge + Above Gear Req**: 18898\n\n**Atk with Knowledge + Above Gear Req + Advantage**: 27114\n\n**Atk with Knowledge + Above Gear Req + Petra lead**: 21856\n\n**Atk with Knowledge + Above Gear Req + Petra lead + Advantage**: 30072\n\n**Atk with Knowledge + Above Gear Req + Erwin lead**: 22184\n\n**Atk with Knowledge + Above Gear Req + Erwin lead + Advantage**: 30401\n\n**Atk with Knowledge + Above Gear Req + Petra & Erwin lead**: 25142\n\n**Atk with Knowledge + Above Gear Req + Petra & Erwin lead + Advantage**: 33359", true)

                    message.channel.send({embed});
                }
                if(message.content == '--gin5') {
                  const embed = new Discord.RichEmbed()
                    .setTitle("UNIT DETAILS")
                    .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
                    .setColor(0xebc700)
                    .setDescription("**Name** : Eldo Gin, Levi's Group.\n**Rarity** : ★★★★★.\n**Tags** : Survey Corps.\n**SP Cost** : 5.")
                    .addField("-------","**Attribute** : <:gold:609770604249481216> Gold.\n**Ability** : <:None:609767858364481589> No Ability.\n**Attack type** : <:Assault:609769649281957897> 3D maneuver (single/offensive).\nApproach the enemy and launch a single attack.")
                    .addBlankField()
                    .setImage("https://cdn.discordapp.com/attachments/596436269110657086/596436439944921108/stand_000032.png")
                    .setThumbnail("https://cdn.discordapp.com/attachments/596408171346657304/596408276304920625/card_000032.png")
                    .addField("Leader Skill",
                      "Increase the SP gauge amount of all golden attribute units in the deck by 15% at the start of the battle.")
                    .addField("Potential Skill", "The damage to the enemy is always increased by 5% during the battle.", true)
                    .addField("SP Skill", "Inflict minor damage to the specified enemy and the enemies around it.\nSP Video --> Not Yet", true)
                    .addBlankField()
                    .addField("65 LVL Stats", "**HP** : 7926.\n**Offensive Power** : 5787.\n**Consecutive attacks** : 1.\n**Flight Speed** : 360.\n**Running Speed** : 120.\n**Flying HP reduction speed** : 5.0%/s.", true)
                    .addBlankField()
                    .addField("Damage Calcs made by *Rose and Mystic*", "**Base Atk**: 6417\n\n**Atk with Knowledge**: 7380\n\n**Atk with Knowledge + Above Gear Req**: 8855\n\n**Atk with Knowledge + Above Gear Req + Advantage**: 12706\n\n**Atk with Knowledge + Above Gear Req + Petra lead**: 10242\n\n**Atk with Knowledge + Above Gear Req + Petra lead + Advantage**: 14092\n\n**Atk with Knowledge + Above Gear Req + Erwin lead**: 10396\n\n**Atk with Knowledge + Above Gear Req + Erwin lead + Advantage**: 14246\n\n**Atk with Knowledge + Above Gear Req + Petra & Erwin lead**: 11782\n\n**Atk with Knowledge + Above Gear Req + Petra & Erwin lead + Advantage**: 15632", true)
                    .addBlankField()
                    .addField("SP Damage Calcs made by *Rose and Mystic*","**SP Type**: 30m Radial AOE\n\n**SP Charge**: 1.714%/s\n\n**Base SP Damage**: 39503\n\n**SP Dmg with Knowledge**: 45428\n\n**SP Dmg with Knowledge + Above Gear Req**: 54514\n\n**SP Dmg with Knowledge + Above Gear Req + Advantage**: 78216\n\n**SP Dmg with Knowledge + Above Gear Req + Petra lead**: 63047\n\n**SP Dmg with Knowledge + Above Gear Req + Petra lead + Advantage**: 86749\n\n**SP Dmg with Knowledge + Above Gear Req + Erwin lead**: 63995\n\n**SP Dmg with Knowledge + Above Gear Req + Erwin lead + Advantage**: 87697\n\n**SP Dmg with Knowledge + Above Gear Req + Petra & Erwin lead**: 72528\n\n**SP Dmg with Knowledge + Above Gear Req + Petra & Erwin lead + Advantage**: 96229", true)

                    message.channel.send({embed});
                }
              if(message.content == '--ymir5') {
                const embed = new Discord.RichEmbed()
                  .setTitle("UNIT DETAILS")
                  .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
                  .setColor(0x077bd4)
                  .setDescription("**Name** : Ymir, Survey Corps.\n**Rarity** : ★★★★★.\n**Tags** : Survey Corps.\n**SP Cost** : 2.")
                  .addField("-------","**Attribute** : <:blue:609770604341755963> Sky Blue.\n**Ability** : <:None:609767858364481589> No Ability.\n**Attack type** : <:Support:609769494142910464> 3D maneuver (single/offensive).\nLaunch a single attack on the specified enemy and then break away.")
                  .addBlankField()
                  .setImage("https://cdn.discordapp.com/attachments/596436269110657086/596436392284913705/stand_000017.png")
                  .setThumbnail("https://cdn.discordapp.com/attachments/596408171346657304/596731902883266560/card_000017.png")
                  .addField("Leader Skill",
                    "Increases the critical rate of all 'Sky Blue' units in the deck by 10% during the battle.")
                  .addField("Potential Skill", "The damage to the enemy is always increased by 5% during the battle.", true)
                  .addField("SP Skill", "Inflicts small damage on a specified range of enemies.\nSP Video --> https://youtu.be/CXsRWvBjmXw", true)
                  .addBlankField()
                  .addField("65 LVL Stats", "**Offensive Power** : 5787.\n**Flight Speed** : 360.", true)
                  .addBlankField()
                  .addField("Damage Calcs made by *Rose and Mystic*", "**Base Atk**: 6270\n\n**Atk with Knowledge**: 7210\n\n**Atk with Knowledge + Above Gear Req**: 8653\n\n**Atk with Knowledge + Above Gear Req + Advantage**: 12417\n\n**Atk with Knowledge + Above Gear Req + Petra lead**: 10007\n\n**Atk with Knowledge + Above Gear Req + Petra lead + Advantage**: 13769\n\n**Atk with Knowledge + Above Gear Req + Erwin lead**: 10157\n\n**Atk with Knowledge + Above Gear Req + Erwin lead + Advantage**: 13919\n\n**Atk with Knowledge + Above Gear Req + Petra & Erwin lead**: 11512\n\n**Atk with Knowledge + Above Gear Req + Petra & Erwin lead + Advantage**: 15274", true)
                  .addBlankField()
                  .addField("SP Damage Calcs made by *Rose and Mystic*","**SP Type**: 14m Horizontal Zone\n\n**SP Charge**: 0.8%/s\n\n**Base SP Damage**: 43491\n\n**SP Dmg with Knowledge**: 50015\n\n**SP Dmg with Knowledge + Above Gear Req**: 60016\n\n**SP Dmg with Knowledge + Above Gear Req + Advantage**: 86112\n\n**SP Dmg with Knowledge + Above Gear Req + Petra lead**: 69412\n\n**SP Dmg with Knowledge + Above Gear Req + Petra lead + Advantage**: 95506\n\n**SP Dmg with Knowledge + Above Gear Req + Erwin lead**: 70455\n\n**SP Dmg with Knowledge + Above Gear Req + Erwin lead + Advantage**: 96550\n\n**SP Dmg with Knowledge + Above Gear Req + Petra & Erwin lead**: 79849\n\n**SP Dmg with Knowledge + Above Gear Req + Petra & Erwin lead + Advantage**: 105944", true)

                  message.channel.send({embed});
              }

            if(message.content == '--hange5') {
              const embed = new Discord.RichEmbed()
                .setTitle("UNIT DETAILS")
                .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
                .setColor(0x077bd4)
                .setDescription("**Name** : Hange Zoe, 4th Squadron Leader.\n**Rarity** : ★★★★★.\n**Tags** : Survey Corps.\n**SP Cost** : 3.")
                .addField("-------","**Attribute** : <:blue:609770604341755963> Sky Blue.\n**Ability** : <:None:609767858364481589> No Ability.\n**Attack type** : <:Armcutter:609769494059024396> 3D maneuver (single/arm).\nShe launches a single attack on the designated enemy's arm and then leaves. The enemy whose arms are cut loses attack performance.")
                .addBlankField()
                .setImage("https://cdn.discordapp.com/attachments/596436269110657086/596436334856503302/stand_000010.png")
                .setThumbnail("https://cdn.discordapp.com/attachments/596408171346657304/596408236614352896/card_000010.png")
                .addField("Leader Skill",
                  "Increase the SP gauge amount of all the 'Sky Blue' units in the deck by 15% at the start of the battle.")
                .addField("Potential Skill", "The damage to the enemy is always increased by 5% during the battle.", true)
                .addField("SP Skill", "50% increases in attack force for all units on the stage (not elegible for assault-type 3D maneuver (purple), gun soldiers and archers).\nSP Video --> https://youtu.be/2nPGtuh0GY8", true)
                .addBlankField()
                .addField("65 LVL Stats", "**Arm destruction power** : 646.\n**Offensive Power** : 1028.\n**Flight Speed** : 360.", true);

                message.channel.send({embed});
            }
            if(message.content == '--historia5') {
              const embed = new Discord.RichEmbed()
                .setTitle("UNIT DETAILS")
                .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
                .setColor(0xebc700)
                .setDescription("**Name** : Krista Lenz, Survey Corps.\n**Rarity** : ★★★★★.\n**Tags** : Survey Corps.\n**SP Cost** : 5.")
                .addField("-------","**Attribute** : <:gold:609770604249481216> Gold.\n**Ability** : <:Drive:609767858150309910> Drive.\n**Attack type** : <:Assault:609769649281957897> 3D maneuver (single/offensive).\nShe approaches the enemy and launch a single attack that increases the damage with each stroke. The number of consecutive attacks is 5.")
                .addBlankField()
                .setImage("https://cdn.discordapp.com/attachments/596436269110657086/596436513961672705/stand_000069.png")
                .setThumbnail("https://cdn.discordapp.com/attachments/596408171346657304/596408392751251466/card_000069.png")
                .addField("Leader Skill",
                  "Increase the maximum HP of all 'Gold' units in the deck by 15% during the battle.")
                .addField("Potential Skill", "The damage to the enemy is always increased by 5% during the battle.", true)
                .addField("SP Skill", "Inflict foot damage (small) and arm damage (small) to the specified enemy and then small damage.\nSP Video --> https://youtu.be/fLDJ-o4fVlk", true)
                .addBlankField()
                .addField("65 LVL Stats", "**HP** : 4087.\n**Offensive Power** : 787.\n**Consecutive attacks** : 5.\n**Flight Speed** : 360.\n**Running Speed** : 120.\n**Flying HP reduction speed** : 4.0%/s.", true)
                .addBlankField()
                .addField("Damage Calcs made by *Rose and Mystic*", "**Base Atk**: 802\n\n**Atk with Knowledge**: 922\n\n**Atk with Knowledge + Above Gear Req**: 1107, 4428, 7749, 11070, 14391\n\n**Atk with Knowledge + Above Gear Req + Advantage**: 1588, 6352, 11116, 15880, 20644\n\n**Atk with Knowledge + Above Gear Req + Petra lead: 1280, 5120, 8960, 12800, 16640\n\n**Atk with Knowledge + Above Gear Req + Petra lead + Advantage**: 1761, 7044, 12327, 17610, 22893\n\n**Atk with Knowledge + Above Gear Req + Erwin lead**: 1299, 5196, 9093, 12990, 16887\n\n**Atk with Knowledge + Above Gear Req + Erwin lead + Advantage**: 1780, 7120, 12460, 17800, 23140\n\n**Atk with Knowledge + Above Gear Req + Petra & Erwin lead**: 1472, 5888, 10304, 14720, 19136\n\n**Atk with Knowledge + Above Gear Req + Petra & Erwin lead + Advantage**: 1954, 7816, 13678, 19540, 25402", true)
                .addBlankField()
                .addField("SP Damage Calcs made by *Rose and Mystic*","**SP Type**: Single Target Cut & Attack\n\n**SP Charge**: 1.94%/s\n\n**Base SP Damage**: 35297\n\n**SP Dmg with Knowledge**: 40592\n\n**SP Dmg with Knowledge + Above Gear Req**: 48710\n\n**SP Dmg with Knowledge + Above Gear Req + Advantage**: 69888\n\n**SP Dmg with Knowledge + Above Gear Req + Petra lead**: 56334\n\n**SP Dmg with Knowledge + Above Gear Req + Petra lead + Advantage: 77512\n\n**SP Dmg with Knowledge + Above Gear Req + Erwin lead**: 57181\n\n**SP Dmg with Knowledge + Above Gear Req + Erwin lead + Advantage**: 78359\n\n**SP Dmg with Knowledge + Above Gear Req + Petra & Erwin lead**: 64805\n\n**SP Dmg with Knowledge + Above Gear Req + Petra & Erwin lead + Advantage**: 85983", true)

                message.channel.send({embed});
            }
            if(message.content == '--sasha5') {
              const embed = new Discord.RichEmbed()
                .setTitle("UNIT DETAILS")
                .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
                .setColor(0x260652)
                .setDescription("**Name** : Sasha Blouse, Unconventional Recruits.\n**Rarity** : ★★★★★.\n**Tags** : Training Corps.\n**SP Cost** : 4.")
                .addField("-------","**Attribute** : <:jetblack:609770604270452769> Jet Black.\n**Ability** : <:None:609767858364481589> No Ability.\n**Attack type** : <:Assault:609769649281957897> 3D maneuver (single/offensive).\nApproach the enemy and launch a single attack.")
                .addBlankField()
                .setImage("https://media.discordapp.net/attachments/575616706576252944/583955047696826368/stand_000015.png")
                .setThumbnail("https://cdn.discordapp.com/attachments/596408171346657304/596731903533514801/card_000015.png")
                .addField("Leader Skill",
                  "Increase the SP gauge speed of all 'Jet Black' units in the deck by 20% during the battle.")
                .addField("Potential Skill", "The damage to the enemy is always increased by 5% during the battle.", true)
                .addField("SP Skill", "Raise your HP at the moment of launch and stay on the field, recovering the HP of all the units.\nSP Video --> https://youtu.be/XcFS3AH0lyI", true)
                .addBlankField()
                .addField("65 LVL Stats", "**HP** : 6765.\n**Offensive Power** : 7478.\n**Consecutive attacks** : 3.\n**Flight Speed** : 360.\n**Running Speed** : 120.\n**Flying HP reduction speed** : 6.5%/s.", true)
                .addBlankField()
                .addField("Damage Calcs made by *Rose and Mystic*", "**Base Atk**: 7608\n\n**Atk with Knowledge**: 8749\n\n**Atk with Knowledge + Above Gear Req**: 10499\n\n**Atk with Knowledge + Above Gear Req + Advantage**: 15064\n\n**Atk with Knowledge + Above Gear Req + Marco lead**: 12142\n\n**Atk with Knowledge + Above Gear Req + Marco lead + Advantage**: 16707", true)

                message.channel.send({embed});
            }
            if(message.content == '--armin5') {
              const embed = new Discord.RichEmbed()
                .setTitle("UNIT DETAILS")
                .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
                .setColor(0xff0000)
                .setDescription("**Name** : Armin Arlert, Commander candidate.\n**Rarity** : ★★★★★.\n**Tags** : Training Corps.\n**SP Cost** : 4.")
                .addField("-------","**Attribute** : <:redlotus:609770604299812884> Crimson.\n**Ability** : <:Stunner:609767858490048513> Stun.\n**Attack type** : <:Assault:609769649281957897> 3D maneuver (single/offensive).\nApproach the enemy and launch a single attack. You can stun an enemy if you hit it several attacks.")
                .addBlankField()
                .setImage("https://media.discordapp.net/attachments/575616706576252944/589014022418857984/stand_000067-CAB-d508af270e922793736ecabf8a774386-13178932160455242179.png")
                .setThumbnail("https://cdn.discordapp.com/attachments/596408171346657304/596408387437199360/card_000067.png")
                .addField("Leader Skill",
                  "Increase the critical rate of all 'Crimson' units in the deck by 10% during the battle.")
                .addField("Potential Skill", "The damage to the enemy is always increased by 5% during the battle.", true)
                .addField("SP Skill", "Deals small damage and stun damage to enemies in a specified range.\nSP Video --> https://youtu.be/haJrYCtQTuc", true)
                .addBlankField()
                .addField("65 LVL Stats", "**HP** : 6102.\n**Offensive Power** : 5298.\n**Consecutive attacks** : 3.\n**Flight Speed** : 360.\n**Running Speed** : 120.\n**Flying HP reduction speed** : 4.3%/s.", true)
                .addBlankField()
                .addField("Damage Calcs made by *Rose and Mystic*", "**Base Atk**: 5396\n\n**Atk with Knowledge**: 6205\n\n**Atk with Knowledge + Above Gear Req**: 7446\n\n**Atk with Knowledge + Above Gear Req + Advantage**: 10684\n\n**Atk with Knowledge + Above Gear Req + Marco lead**: 8612\n\n**Atk with Knowledge + Above Gear Req + Marco lead + Advantage**: 11850", true)
                .addBlankField()
                .addField("SP Damage Calcs made by *Rose and Mystic*","**SP Type**: 12m Radial AOE\n\n**SP Charge**: 1.235%/s\n\n**Base SP Damage**: 31540\n\n**SP Dmg with Knowledge**: 36271\n\n**SP Dmg with Knowledge + Above Gear Req**: 43525\n\n**SP Dmg with Knowledge + Above Gear Req + Advantage**: 62449\n\n**SP Dmg with Knowledge + Above Gear Req + Marco lead**: 50338\n\n**SP Dmg with Knowledge + Above Gear Req + Marco lead + Advantage**: 69262", true)

                message.channel.send({embed});
            }
            if(message.content == '--hitch5') {
              const embed = new Discord.RichEmbed()
                .setTitle("UNIT DETAILS")
                .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
                .setColor(0xff0000)
                .setDescription("**Name** : Hitch Dreyse, Escort Team.\n**Rarity** : ★★★★★.\n**Tags** : Military police.\n**SP Cost** : 2.")
                .addField("-------","**Attribute** : <:redlotus:609770604299812884> Crimson.\n**Ability** : <:None:609767858364481589> No Ability.\n**Attack type** : <:Support:609769494142910464> 3D maneuver (single/offensive).\nLaunch a single attack on the specified enemy and then leave.")
                .addBlankField()
                .setImage("https://cdn.discordapp.com/attachments/596436269110657086/596436615426211850/stand_007122.png")
                .setThumbnail("https://media.discordapp.net/attachments/596408171346657304/596408432005873869/card_007122.png")
                .addField("Leader Skill",
                  "Increase the attack force of all 'Military Police' units in the deck by 18% during the battle.")
                .addField("Potential Skill", "The damage to the enemy is always increased by 5% during the battle.", true)
                .addField("SP Skill", "Inflict small damage to the specified enemy 3 times and break away.\nSP Video --> https://youtu.be/b-7PBZiKTcQ", true)
                .addBlankField()
                .addField("65 LVL Stats","**Offensive Power** : 5372.\n**Flight Speed** : 360.", true)
                .addBlankField()
                .addField("Damage Calcs made by *Rose and Mystic*", "**Base Atk**: 7002\n\n**Atk with Knowledge**: 8052\n\n**Atk with Knowledge + Above Gear Req**: 9663\n\n**Atk with Knowledge + Above Gear Req + Advantage**: 13864\n\n**Atk with Knowledge + Above Gear Req + Hitch lead**: 11175\n\n**Atk with Knowledge + Above Gear Req + Hitch lead + Advantage**: 15376", true)
                .addBlankField()
                .addField("SP Damage Calcs made by *Rose and Mystic*","**SP Type**: Single Target 1-5 hits\n\n**SP Charge**: 1.32%/s\n\n**Base SP Damage**: 11215 x1/2/3/4/5\n\n**SP Dmg with Knowledge**: 12897 x1/2/3/4/5\n\n**SP Dmg with Knowledge + Above Gear Req**: 15477 x1/2/3/4/5\n\n**SP Dmg with Knowledge + Above Gear Req + Advantage**: 22206 x1/2/3/4/5\n\n**SP Dmg with Knowledge + Above Gear Req + Hitch lead**: 17899 x1/2/3/4/5\n\n**SP Dmg with Knowledge + Above Gear Req + Hitch lead + Advantage**: 24628 x1/2/3/4/5", true)

                message.channel.send({embed});
            }
            if(message.content == '--rico5') {
              const embed = new Discord.RichEmbed()
                .setTitle("UNIT DETAILS")
                .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
                .setColor(0x260652)
                .setDescription("**Name** : Rico Brzenska, The Garrison.\n**Rarity** : ★★★★★.\n**Tags** : Garrison.\n**SP Cost** : 3.")
                .addField("-------","**Attribute** : <:jetblack:609770604270452769> Jet Black.\n**Ability** : <:None:609767858364481589> No Ability.\n**Attack type** : <:Assault:609769649281957897> 3D maneuver (single/offensive).\n\nApproach the enemy and launch a single attack.")
                .addBlankField()
                .setImage("https://media.discordapp.net/attachments/596436269110657086/596436419480911904/stand_000026.png?width=704&height=676")
                .setThumbnail("https://cdn.discordapp.com/attachments/596408171346657304/596408272068673536/card_000027.png")
                .addField("Leader Skill",
                  "Increases the attack force of all 'Garrison' units in the deck by 20% during the battle.")
                .addField("Potential Skill", "The damage to the enemy is always increased by 5% during the battle.", true)
                .addField("SP Skill", "Attack enemies within the specified range 6 times with up to 3 times per body.\nSP Video --> https://youtu.be/nbh28nwzdO0", true)
                .addBlankField()
                .addField("65 LVL Stats", "**HP** : 4452.\n**Offensive Power** : 3341.\n**Consecutive attacks** : 3.\n**Flight Speed** : 360.\n**Running Speed** : 120.\n**Flying HP reduction speed** : 4.9%/s.", true)
                .addBlankField()
                .addField("Damage Calcs made by *Rose and Mystic*", "**Base Atk**: 3405\n\n**Atk with Knowledge**: 3916\n\n**Atk with Knowledge + Above Gear Req**: 4699\n\n**Atk with Knowledge + Above Gear Req + Advantage**: 6742\n\n**Atk with Knowledge + Above Gear Req + Rico lead**: 6252\n\n**Atk with Knowledge + Above Gear Req + Rico lead + Advantage**: 7559", true)

                message.channel.send({embed});
            }
            if(message.content == '--reiner5_2') {
              const embed = new Discord.RichEmbed()
                .setTitle("UNIT DETAILS")
                .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
                .setColor(0xebc700)
                .setDescription("**Name** : Reiner Braun, Survey Corps.\n**Rarity** : ★★★★★.\n**Tags** : Survey Corps.\n**SP Cost** : 5.")
                .addField("-------","**Attribute** : <:gold:609770604249481216> Gold.\n**Ability** : <:Hunter:609767858460950528> Hunter.\n**Attack type** : <:Assault:609769649281957897> 3D maneuver (single/offensive).\nApproach the enemy and launch a single attack. Demonstrate high attack power against large titans.")
                .addBlankField()
                .setImage("https://cdn.discordapp.com/attachments/596436269110657086/596436511457673238/stand_000068.png")
                .setThumbnail("https://cdn.discordapp.com/attachments/596408171346657304/596408389806850089/card_000068.png")
                .addField("Leader Skill",
                  "Increase the attack strength of all 'Gold' units in the deck by 10% during the battle.")
                .addField("Potential Skill", "The damage to the enemy is always increased by 5% during the battle.", true)
                .addField("SP Skill", "Deal 8 times damage to a specified enemy (more damage to a large giant).\nSP Video --> https://youtu.be/5baZTCiBMGY", true)
                .addBlankField()
                .addField("65 LVL Stats", "**HP** : 7851.\n**Offensive Power** : 1227.\n**Consecutive attacks** : 2.\n**Flight Speed** : 360.\n**Running Speed** : 120.\n**Flying HP reduction speed** : 7.5%/s.", true)
                .addBlankField()
                .addField("Damage Calcs made by *Rose and Mystic*", "**Base Atk**: 1250 & 10000\n\n**Atk with Knowledge**: 1438 & 11500\n\n**Atk with Knowledge + Above Gear Req**: 1725 & 13800\n\n**Atk with Knowledge + Above Gear Req + Advantage**: 2475 & 19800\n\n**Atk with Knowledge + Above Gear Req + Petra lead**: 1995 & 15960\n\n**Atk with Knowledge + Above Gear Req + Petra lead + Advantage**: 2745 & 21960\n\n**Atk with Knowledge + Above Gear Req + Erwin lead**: 2025 & 16200\n\n**Atk with Knowledge + Above Gear Req + Erwin lead + Advantage**: 2775 & 22200\n\n**Atk with Knowledge + Above Gear Req + Petra & Erwin lead**: 2295 & 18360\n\n**Atk with Knowledge + Above Gear Req + Petra & Erwin lead + Advantage**: 3045 & 24360", true)
                .addBlankField()
                .addField("SP Damage Calcs made by *Rose and Mystic*","**SP Type**: 12 Hits 1 Target\n\n**SP Charge**: 1.365%/s\n\n**Base SP Damage**: 5528 / 66336\n\n**SP Dmg with Knowledge**: 6357 / 76286\n\n**SP Dmg with Knowledge + Above Gear Req**: 7627 / 91544\n\n**SP Dmg with Knowledge + Above Gear Req + Advantage**: 10945 / 131345\n\n**SP Dmg with Knowledge + Above Gear Req + Petra lead**: 8823 / 105872\n\n**SP Dmg with Knowledge + Above Gear Req + Petra lead + Advantage**: 12139 / 145674\n\n**SP Dmg with Knowledge + Above Gear Req + Erwin lead**: 8955 / 107464\n\n**SP Dmg with Knowledge + Above Gear Req + Erwin lead + Advantage**: 12272 / 147266\n\n**SP Dmg with Knowledge + Above Gear Req + Petra & Erwin lead**: 10149 / 121793\n\n**SP Dmg with Knowledge + Above Gear Req + Petra & Erwin lead + Advantage**: 13466 / 161594", true)

                message.channel.send({embed});
            }
            if(message.content == '--annie5') {
              const embed = new Discord.RichEmbed()
                .setTitle("UNIT DETAILS")
                .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
                .setColor(0xff0000)
                .setDescription("**Name** : Annie Lockhart, Training Corps.\n**Rarity** : ★★★★★.\n**Tags** : Training Corp.\n**SP Cost** : 4.")
                .addField("-------","**Attribute** : <:redlotus:609770604299812884> Crimson.\n**Ability** : <:None:609767858364481589> No Ability\n**Attack type** : <:AOE:609769494105161729> 3D maneuver (single/offensive).\nAttack enemy and all enemies around it.")
                .addBlankField()
                .setImage("https://cdn.discordapp.com/attachments/596436269110657086/596436335670329364/stand_000011.png")
                .setThumbnail("https://cdn.discordapp.com/attachments/596408171346657304/596408239500034069/card_000011.png")
                .addField("Leader Skill",
                  "Increase the SP charge of all units in the deck with the 'Training Corps' tag by 50% during the battle.")
                .addField("Potential Skill", "The damage to the enemy is always increased by 5% during the battle.", true)
                .addField("SP Skill", "Increase his own attack force at the time of deployment, and also raises his own attack force depending on the number of ally units on the field.\nSP Video --> https://youtu.be/RYyHQ4eQPvk", true)
                .addBlankField()
                .addField("65 LVL Stats", "**HP** : 6939.\n**Offensive Power** : 2163.\n**Consecutive attacks** : 3.\n**Flight Speed** : 360.\n**Running Speed** : 120.\n**Flying HP reduction speed** : 4.0%/s.", true)
                .addBlankField()
                .addField("Damage Calcs made by *Rose and Mystic*", "**Base Atk**: 2676\n\n**Atk with Knowledge**: 3077\n\n**Atk with Knowledge + Above Gear Req**: 3693\n\n**Atk with Knowledge + Above Gear Req + Advantage**: 5298\n\n**Atk with Knowledge + Above Gear Req + Marco lead**: 4271\n\n**Atk with Knowledge + Above Gear Req + Marco lead + Advantage**: 5876", true)

                message.channel.send({embed});
            }
            if(message.content == '--reiner5') {
              const embed = new Discord.RichEmbed()
                .setTitle("UNIT DETAILS")
                .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
                .setColor(0x077bd4)
                .setDescription("**Name** : Reiner Braun, Training Corps.\n**Rarity** : ★★★★★.\n**Tags** : Training Corps.\n**SP Cost** : 5.")
                .addField("-------","**Attribute** : <:blue:609770604341755963> Sky Blue.\n**Ability** : <:Cancel:609767858456756304> Cancel.\n**Attack type** : <:Assault:609769649281957897> 3D maneuver (single/offensive).\n\n Launch a single attack while canceling enemy attack.")
                .addBlankField()
                .setImage("https://cdn.discordapp.com/attachments/596436269110657086/596436328976089092/stand_000005.png")
                .setThumbnail("https://media.discordapp.net/attachments/596408171346657304/596408226761801728/card_000005.png")
                .addField("Leader Skill",
                  "Increase the attack power of all units in the deck by 10% during battle.")
                .addField("Potential Skill", "The damage to the enemy is always increased by 5% during the battle.", true)
                .addField("SP Skill", "Deals small damage to enemies in the specified range.\nSP Video --> https://youtu.be/U7tt03UTwWo", true)
                .addBlankField()
                .addField("65 LVL Stats", "**HP** : 5895.\n**Offensive Power** : 5181.\n**Consecutive attacks** : 2.\n**Flight Speed** : 360.\n**Running Speed** : 120.\n**Flying HP reduction speed** : 6.5%/s.", true)
                .addBlankField()
                .addField("Damage Calcs made by *Rose and Mystic*", "**Base Atk**: 5270\n\n**Atk with Knowledge**: 6061\n\n**Atk with Knowledge + Above Gear Req**: 7273\n\n**Atk with Knowledge + Above Gear Req + Advantage**: 10435\n\n**Atk with Knowledge + Above Gear Req + Marco lead**: 8411\n\n**Atk with Knowledge + Above Gear Req + Marco lead + Advantage**: 11573", true)
                .addBlankField()
                .addField("SP Damage Calcs made by *Rose and Mystic*","**SP Type**: 27m Horizontal Zone\n\n**SP Charge**: 1.385%/s\n\n**Base SP Damage**: 52682\n\n**SP Dmg with Knowledge**: 60584\n\n**SP Dmg with Knowledge + Above Gear Req**: 72701\n\n**SP Dmg with Knowledge + Above Gear Req + Advantage**: 104310\n\n**SP Dmg with Knowledge + Above Gear Req + Marco lead**: 84080\n\n**SP Dmg with Knowledge + Above Gear Req + Marco lead + Advantage**: 115690", true)

                message.channel.send({embed});
            }
            if(message.content == '--jean5') {
              const embed = new Discord.RichEmbed()
                .setTitle("UNIT DETAILS")
                .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
                .setColor(0xff0000)
                .setDescription("**Name** : Jean Kirschtein, Training Corps.\n**Rarity** : ★★★★★.\n**Tags** : Training Corp.\n**SP Cost** : 5.")
                .addField("-------","**Attribute** : <:redlotus:609770604299812884> Crimson.\n**Ability** : <:None:609767858364481589> No Ability\n**Attack type** : <:Assault:609769649281957897> 3D maneuver (single/offensive).\nApproach the enemy and launch a single attack.")
                .addBlankField()
                .setImage("https://cdn.discordapp.com/attachments/596436269110657086/596436383812288542/stand_000013.png")
                .setThumbnail("https://cdn.discordapp.com/attachments/596408171346657304/596408243509788672/card_000013.png")
                .addField("Leader Skill",
                  "Increase the maximum HP of the all units with the 'Training Corps' tag in the deck by 40% during the battle.")
                .addField("Potential Skill", "The damage to the enemy is always increased by 5% during the battle.", true)
                .addField("SP Skill", "Increase his own attack force at the time of deployment, and also raises his own attack force depending on the number of ally units on the field.\nSP Video --> https://youtu.be/tgMCREQiyaw", true)
                .addBlankField()
                .addField("65 LVL Stats", "**HP** : 10305.\n**Offensive Power** : 4054.\n**Consecutive attacks** : 3.\n**Flight Speed** : 360.\n**Running Speed** : 120.\n**Flying HP reduction speed** : 5.0%/s.", true)
                .addBlankField()
                .addField("Damage Calcs made by *Rose and Mystic*", "**Base Atk**: 4129\n\n**Atk with Knowledge**: 4748\n\n**Atk with Knowledge + Above Gear Req**: 5698\n\n**Atk with Knowledge + Above Gear Req + Advantage**: 8176\n\n**Atk with Knowledge + Above Gear Req + Marco lead**: 6590", true)

                message.channel.send({embed});
            }
            if(message.content == '--bert5') {
              const embed = new Discord.RichEmbed()
                .setTitle("UNIT DETAILS")
                .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
                .setColor(0xadadad)
                .setDescription("**Name** : Bertholdt Hoover, Training Corps.\n**Rarity** : ★★★★★.\n**Tags** : Training Corps.\n**SP Cost** : 2.")
                .addField("-------","**Attribute** : <:silver:609770604048023573> Silver.\n**Ability** : <:None:609767858364481589> No Ability.\n**Attack type** : <:Support:609769494142910464> 3D maneuver (single/offensive).\nLaunch a single attack on the specified enemy and then break away.")
                .addBlankField()
                .setImage("https://cdn.discordapp.com/attachments/596436269110657086/596436330490101780/stand_000006.png")
                .setThumbnail("https://cdn.discordapp.com/attachments/596408171346657304/596408231836909620/card_000006.png")
                .addField("Leader Skill",
                  "Increase the SP gauge amount of all units with the 'Training Corps' tag in the deck by 40% at the start of the battle.")
                .addField("Potential Skill", "The damage to the enemy is always increased by 5% during the battle.", true)
                .addField("SP Skill", "Inflicts small damage on the specified enemy and the enemies around it.\nSP Video --> https://youtu.be/xmvy-BOM4Go", true)
                .addBlankField()
                .addField("65 LVL Stats", "**Offensive Power** : 4924.\n**Flight Speed** : 360.", true)
                .addBlankField()
                .addField("Damage Calcs made by *Rose and Mystic*", "**Base Atk**: 5480\n\n**Atk with Knowledge**: 6302\n\n**Atk with Knowledge + Above Gear Req**: 7562\n\n**Atk with Knowledge + Above Gear Req + Advantage**: 10850\n\n**Atk with Knowledge + Above Gear Req + Marco lead**: 8746\n\n**Atk with Knowledge + Above Gear Req + Marco lead + Advantage**: 12034", true)
                .addBlankField()
                .addField("SP Damage Calcs made by *Rose and Mystic*","**SP Type**: 30m Radial AOE\n\n**SP Charg**: 0.925%/s\n\n**Base SP Damage**: 33426\n\n**SP Dmg with Knowledge**: 38440\n\n**SP Dmg with Knowledge + Above Gear Req**: 46128\n\n**SP Dmg with Knowledge + Above Gear Req + Advantage**: 66183\n\n**SP Dmg with Knowledge + Above Gear Req + Marco lead**: 53348\n\n**SP Dmg with Knowledge + Above Gear Req + Marco lead + Advantage**: 73403", true)

                message.channel.send({embed});
            }
            if(message.content == '--marco5') {
              const embed = new Discord.RichEmbed()
                .setTitle("UNIT DETAILS")
                .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
                .setColor(0xadadad)
                .setDescription("**Name** : Marco Pot, Brigade 19.\n**Rarity** : ★★★★★.\n**Tier** : B.\n**Tags** : Training Corps.\n**SP Cost** : 2.")
                .addField("-------","**Attribute** : <:silver:609770604048023573> Silver.\n**Ability** : <:None:609767858364481589> No Ability.\n**Attack type** : <:Legcutter:609769493723348993> 3D maneuver (single/foot).\nLaunch a single attack on the designated enemy's foot and then break away. The enemy whose leg was cut loses its movement performance.")
                .addBlankField()
                .setImage("https://cdn.discordapp.com/attachments/596436269110657086/596436517468241923/stand_000074.png")
                .setThumbnail("https://cdn.discordapp.com/attachments/596408171346657304/596792646450806804/card_000074.png")
                .addField("Leader Skill",
                  "Increase the attack strength of all units in the deck with the 'Training Corps' tag by 18% during the battle.")
                .addField("Potential Skill", "The damage to the enemy is always increased by 5% during the battle.", true)
                .addField("SP Skill", "Make a small leg damage to the specified enemy twice.\nSP Video --> Not Yet", true)
                .addBlankField()
                .addField("65 LVL Stats", "**Offensive Power** : 895.\n**Leg destruction power** : 563.\n**Flight Speed** : 360.", true);

                message.channel.send({embed});
            }

            if(message.content == '--eren5_2') {
              const embed = new Discord.RichEmbed()
                .setTitle("**UNIT DETAILS**")
                .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
                .setColor(0x260652)
                .setDescription("**Name** : Eren Jeagar, Underwater construction Unit.\n**Rarity** : ★★★★★.\n**Tags** : Survey Corps.\n**SP Cost** : 5.")
                .addField("-------","**Attribute**  : <:jetblack:609770604270452769> Jet Black.\n**Ability** : <:None:609767858364481589> No Ability.\n**Attack type** : <:Assault:609769649281957897> 3D maneuver (single/offensive).\nApproach the enemy and launch a single attack with high damage.")
                .addBlankField()
                .setImage("https://cdn.discordapp.com/attachments/609757756152479773/609763273675505685/stand_010071.png")
                .setThumbnail("https://cdn.discordapp.com/attachments/609757827715694594/610842121330491394/card_000071.png")
                .addField("Leader Skill",
                  "13% Critical rate increase to all 'jet black' units.")
                .addField("Potential Skill", "The damage to the enemy is always increased by 5% during the battle.", true)
                .addField("SP Skill", "Eren turns into Titan at specified location.\nSP Video --> https://www.youtube.com/watch?v=GFKN6gp88pg", true)
                .addBlankField()
                .addField("65 LVL Stats", "**HP** : 7071.\n**Offensive Power** : 7652.\n**Consecutive attacks** : 2.\n**Flight Speed** : 360.\n**Running Speed** : 120.\n**Flying HP reduction speed** : 6.2%/s.", true)
                .addBlankField()
                .addField("Damage Calcs made by *Rose and Mystic*", "**Base Atk**: 9443\n\n**Atk with Knowledge**: 10859\n\n**Atk with Knowledge + Above Gear Req**: 13031\n\n**Atk with Knowledge + Above Gear Req + Advantage**: 18697\n\n**Atk with Knowledge + Above Gear Req + Petra lead**: 15071\n\n**Atk with Knowledge + Above Gear Req + Petra lead + Advantage**: 20737\n\n**Atk with Knowledge + Above Gear Req + Erwin lead**: 15298\n\n**Atk with Knowledge + Above Gear Req + Erwin lead + Advantage**: 21445\n\n**Atk with Knowledge + Above Gear Req + Petra & Erwin lead**: 17337\n\n**Atk with Knowledge + Above Gear Req + Petra & Erwin lead + Advantage**: 23003", true)
                .addBlankField()
                .addField("SP Damage Calcs made by *Rose and Mystic*","**SP Type**: Titan form\n\n**SP Charge**: 0.8%/s\n\n**Consecutive Attacks**: 3\n\n**Base Titan HP**: 270058\n\n**Titan HP Loss**: 2.5%/s\n\n**Base SP Damage**: 10820\n\n**SP Dmg with Knowledge**: 12443\n\n**SP Dmg with Knowledge + Above Gear Req**: 14932\n\n**SP Dmg with Knowledge + Above Gear Req + Advantage**: 21424\n\n**SP Dmg with Knowledge + Above Gear Req + Petra lead**: 17269\n\n**SP Dmg with Knowledge + Above Gear Req + Petra lead + Advantage**: 23761\n\n**SP Dmg with Knowledge + Above Gear Req + Erwin lead**: 17528\n\n**SP Dmg with Knowledge + Above Gear Req + Erwin lead + Advantage**: 24020\n\n**SP Dmg with Knowledge + Above Gear Req + Petra & Erwin lead**: 19866\n\n**SP Dmg with Knowledge + Above Gear Req + Petra & Erwin lead + Advantage**: 26358", true)

                message.channel.send({embed});
            }

            if(message.content == '--levi5_2') {
              const embed = new Discord.RichEmbed()
                .setTitle("UNIT DETAILS")
                .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
                .setColor(0x077bd4)
                .setDescription("**Name** : Levi Ackerman, Underwater construction Unit.\n**Rarity** : ★★★★★.\n**Tags** : Survey Corps.\n**SP Cost** : 5.")
                .addField("-------","**Attribute** : <:blue:609770604341755963> Sky Blue.\n**Ability** : <:Drive:609767858150309910> Drive.\n**Attack type** : <:Assault:609769649281957897> 3D maneuver (single/offensive).\nApproach the enemy and launch a single attack that increases the damage with each stroke.")
                .addBlankField()
                .setImage("https://cdn.discordapp.com/attachments/609757756152479773/609763229593239572/stand_002272.png")
                .setThumbnail("https://cdn.discordapp.com/attachments/609757827715694594/610848700079800330/card_002272.png")
                .addField("Leader Skill",
                  "Increase the SP gauge amount of all units with the 'Survey Corps' tag in the deck by 15% at the start of the battle.")
                .addField("Potential Skill", "The damage to the enemy is always increased by 5% during the battle.", true)
                .addField("SP Skill", "Deploy at specified location with an attack power increase in the drive ability.\nSP Video --> https://www.youtube.com/watch?v=G39780QJORo", true)
                .addBlankField()
                .addField("65 LVL Stats", "**HP** : 7470.\n**Offensive Power** : 1318.\n**Consecutive attacks** : 4.\n**Flight Speed** : 360.\n**Running Speed** : 120.\n**Flying HP reduction speed** : 6.1%/s.", true)
                .addBlankField()
                .addField("Damage Calcs made by *Rose and Mystic*", "**Base Atk**: 1342\n\n**Atk with Knowledge**: 1543\n\n**Atk with Knowledge + Above Gear Req**: 1852, 7408, 12964, 18520\n\n**Atk with Knowledge + Above Gear Req + Advantage**: 2657, 10628, 18599, 26570\n\n**Atk with Knowledge + Above Gear Req + Petra lead**: 2142, 8568, 14994, 21420\n\n**Atk with Knowledge + Above Gear Req + Petra lead + Advantage**: 2947, 11788, 20629, 29470\n\n**Atk with Knowledge + Above Gear Req + Erwin lead**: 2174, 8696, 15218, 21740\n\n**Atk with Knowledge + Above Gear Req + Erwin lead + Advantage**: 2979, 11916, 20853,  29790\n\n**Atk with Knowledge + Above Gear Req + Petra & Erwin lead**: 2464, 9856, 17248, 24640\n\n**Atk with Knowledge + Above Gear Req + Petra & Erwin lead + Advantage**: 3269, 13076, 22883, 32690", true)

                message.channel.send({embed});
            }

            if(message.content == '--mikasa5_2') {
              const embed = new Discord.RichEmbed()
                .setTitle("UNIT DETAILS")
                .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
                .setColor(0xadadad)
                .setDescription("**Name** : Mikasa Ackerman, Underwater construction Unit.\n**Rarity** : ★★★★★.\n**Tags** : Survey Corps.\n**SP Cost** : 5.")
                .addField("-------","**Attribute** : <:silver:609770604048023573> Silver.\n**Ability** : <:None:609767858364481589> No Ability.\n**Attack type** : <:AOE:609769494105161729> 3D maneuver (single/offensive).\nAttack enemy and all enemies around it.")
                .addBlankField()
                .setImage("https://cdn.discordapp.com/attachments/609757756152479773/609763223868014604/stand_000271.png")
                .setThumbnail("https://cdn.discordapp.com/attachments/609757827715694594/610855402409820163/card_000271.png")
                .addField("Leader Skill",
                  "Increase the maximum HP of the all units with the 'Survey Corps' tag in the deck by 12% during the battle.")
                .addField("Potential Skill", "The damage to the enemy is always increased by 5% during the battle.", true)
                .addField("SP Skill", "Deploy at specified location with an attack power increase.\nSP Video --> https://www.youtube.com/watch?v=rRSZi9a_wp4", true)
                .addBlankField()
                .addField("65 LVL Stats", "**HP** : 8266.\n**Offensive Power** : 3396.\n**Consecutive attacks** : 4.\n**Flight Speed** : 360.\n**Running Speed** : 120.\n**Flying HP reduction speed** : 6.0%/s.\n**AOE**: 18m", true)
                .addBlankField()
                .addField("Damage Calcs made by *Rose and Mystic*", "**Base Atk**: 4066\n\n**Atk with Knowledge**: 4676\n\n**Atk with Knowledge + Above Gear Req**: 5611\n\n**Atk with Knowledge + Above Gear Req + Advantage**: 8051\n\n**Atk with Knowledge + Above Gear Req + Petra lead**: 6489\n\n**Atk with Knowledge + Above Gear Req + Petra lead + Advantage**: 8929\n\n**Atk with Knowledge + Above Gear Req + Erwin lead**: 6587\n\n**Atk with Knowledge + Above Gear Req + Erwin lead + Advantage**: 9027\n\n**Atk with Knowledge + Above Gear Req + Petra & Erwin lead**: 7465\n\n**Atk with Knowledge + Above Gear Req + Petra & Erwin lead + Advantage**: 9905", true)

                message.channel.send({embed});
            }

            if(message.content == '--petra5') {
              const embed = new Discord.RichEmbed()
                .setTitle("UNIT DETAILS")
                .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
                .setColor(0xebc700)
                .setDescription("**Name** : Petra Ral, Survey Corps.\n**Rarity** : ★★★★★.\n**Tags** : Survey Corps.\n**SP Cost** : 3.")
                .addField("-------","**Attribute** : <:gold:609770604249481216> Gold.\n**Ability** : <:None:609767858364481589> No Ability.\n**Attack type** : <:Support:609769494142910464> 3D maneuver (single/offensive).\nApproach the enemy and launch a single attack.")
                .addBlankField()
                .setImage("https://cdn.discordapp.com/attachments/609757756152479773/609763232348897359/stand_002942.png")
                .setThumbnail("https://cdn.discordapp.com/attachments/609757827715694594/609758747899723790/card_002942.png")
                .addField("Leader Skill",
                  "18% increase to attack power for all 'gold' units.")
                .addField("Potential Skill", "The damage to the enemy is always increased by 5% during the battle.", true)
                .addField("SP Skill", "Attack the enemies within the specified range in order (up to 3 times per body).\nSP Video --> https://www.youtube.com/watch?v=VNgAe9De4cg", true)
                .addBlankField()
                .addField("65 LVL Stats", "**HP** : 4713.\n**Offensive Power** : 7934.\n**Flight Speed** : 360.", true)
                .addBlankField()
                .addField("Damage Calcs made by *Rose and Mystic*", "**Base Atk**: 9655\n\n**Atk with Knowledge**: 11103\n\n**Atk with Knowledge + Above Gear Req**: 13324\n\n**Atk with Knowledge + Above Gear Req + Advantage**: 19117\n\n**Atk with Knowledge + Above Gear Req + Petra lead**: 15409\n\n**Atk with Knowledge + Above Gear Req + Petra lead + Advantage**: 21202\n\n**Atk with Knowledge + Above Gear Req + Erwin lead**: 15641\n\n**Atk with Knowledge + Above Gear Req + Erwin lead + Advantage**: 21434\n\n**Atk with Knowledge + Above Gear Req + Petra & Erwin lead**: 17727\n\n**Atk with Knowledge + Above Gear Req + Petra & Erwin lead + Advantage**: 23520", true)
                .addBlankField()
                .addField("SP Damage Calcs made by *Rose and Mystic*","**SP Type**: Multiple Hit 24m AOE\n\n**SP Charge**: 1.178%/s\n\n**Base SP Damage**: 10186\n\n**SP Dmg with Knowledge**: 11714\n\n**SP Dmg with Knowledge + Above Gear Req**: 14057\n\n**SP Dmg with Knowledge + Above Gear Req + Advantage**: 20168\n\n**SP Dmg with Knowledge + Above Gear Req + Petra lead**: 16257\n\n**SP Dmg with Knowledge + Above Gear Req + Petra lead + Advantage**: 22368\n\n**SP Dmg with Knowledge + Above Gear Req + Erwin lead**: 16501 Per Hit\n\n**SP Dmg with Knowledge + Above Gear Req + Erwin lead + Advantage**: 22613\n\n**SP Dmg with Knowledge + Above Gear Req + Petra & Erwin lead**: 18701\n\n**SP Dmg with Knowledge + Above Gear Req + Petra & Erwin lead + Advantage**: 24813 ", true)

                message.channel.send({embed});
            }

            if(message.content == '--gelgar5') {
              const embed = new Discord.RichEmbed()
                .setTitle("UNIT DETAILS")
                .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
                .setColor(0xadadad)
                .setDescription("**Name** : Gelgar, Survey Corps.\n**Rarity** : ★★★★★.\n**Tags** : Survey Corps.\n**SP Cost** : 5.")
                .addField("-------","**Attribute** : <:silver:609770604048023573> Silver.\n**Ability** : <:None:609767858364481589> No Ability.\n**Attack type** : <:Assault:609769649281957897> 3D maneuver (single/offensive).\nApproach the enemy and launch a single attack.")
                .addBlankField()
                .setImage("https://cdn.discordapp.com/attachments/609757756152479773/609762996977270804/stand_000040.png")
                .setThumbnail("https://cdn.discordapp.com/attachments/609757827715694594/610866105485099008/card_000040.png")
                .addField("Leader Skill",
                  "18% increase to attack power for all 'silver' units.")
                .addField("Potential Skill", "The damage to the enemy is always increased by 5% during the battle.", true)
                .addField("SP Skill", "Cause minor damage to the enemy in the range of the specified direction, starting from the base.\nSP Video --> https://www.youtube.com/watch?v=ci3kdWxyFBg", true)
                .addBlankField()
                .addField("65 LVL Stats", "**HP** : 4713.\n**Offensive Power** : 5123.\n**Consecutive attacks** : 4.\n**Flight Speed** : 360.\n**Running Speed** : 120.\n**Flying HP reduction speed** : 7.0%/s.", true)
                .addBlankField()
                .addField("Damage Calcs made by *Rose and Mystic*", "**Base Atk**: 5685\n\n**Atk with Knowledge**: 6538\n\n**Atk with Knowledge + Above Gear Req**: 7845\n\n**Atk with Knowledge + Above Gear Req + Advantage**: 11256\n\n**Atk with Knowledge + Above Gear Req + Petra lead**: 9073\n\n**Atk with Knowledge + Above Gear Req + Petra lead + Advantage**: 12484\n\n**Atk with Knowledge + Above Gear Req + Erwin lead**: 9210\n\n**Atk with Knowledge + Above Gear Req + Erwin lead + Advantage**: 12620\n\n**Atk with Knowledge + Above Gear Req + Petra & Erwin lead**: 10438\n\n**Atk with Knowledge + Above Gear Req + Petra & Erwin lead + Advantage**: 13849", true)
                .addBlankField()
                .addField("SP Damage Calcs made by *Rose and Mystic*","**SP Type**: 140m x 16m Rotating Zone\n\n**SP Charge**: 0.828%/s\n\n**Base SP Damage**: 49729\n\n**SP Dmg with Knowledge**: 57188\n\n**SP Dmg with Knowledge + Above Gear Req**: 68626\n\n**SP Dmg with Knowledge + Above Gear Req + Advantage**: 98463\n\n**SP Dmg with Knowledge + Above Gear Req + Petra lead**: 79367\n\n**SP Dmg with Knowledge + Above Gear Req + Petra lead + Advantage**: 109205\n\n**SP Dmg with Knowledge + Above Gear Req + Erwin lead**: 80561\n\n**SP Dmg with Knowledge + Above Gear Req + Erwin lead + Advantage**: 110398\n\n**SP Dmg with Knowledge + Above Gear Req + Petra & Erwin lead**: 91302\n\n**SP Dmg with Knowledge + Above Gear Req + Petra & Erwin lead + Advantage**: 121140", true)
                message.channel.send({embed});
            }
  //============== 4 STARS ==============//
  if(message.content == '--dita4') {
    const embed = new Discord.RichEmbed()
      .setTitle("UNIT DETAILS")
      .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
      .setColor(0xff0000)
      .setDescription("**Name** : Dita Ness, Chief.\n**Rarity** : ★★★★.\n**Tags** : Survey Corps.\n**SP Cost** : 4.")
      .addField("-------","**Attribute** : <:redlotus:609770604299812884> Crimson.\n**Ability** : <:Horseback:609767858406162435> Horse.\n**Attack type** : <:Assault:609769649281957897> 3D maneuver (single/offensive).\nApproach the enemy on horse, and after approaching, throw away the horse and launch a single attack.")
      .addBlankField()
      .setImage("https://media.discordapp.net/attachments/596436269110657086/596436444038430760/stand_000037.png")
      .setThumbnail("https://cdn.discordapp.com/attachments/596408171346657304/596838127092629505/card_000037.png")
      .addField("Leader Skill",
        "Increase the maximum HP of all 'Crimson' units in the deck by 12% during the battle.")
      .addField("Potential Skill", "The damage to the enemy is always increased by 5% during the battle.", true)
      .addField("SP Skill", "Inflict small damage to the specified enemy three times and break away.", true)
      .addBlankField()

      message.channel.send({embed});
  }
  if(message.content == '--eren4') {
    const embed = new Discord.RichEmbed()
      .setTitle("UNIT DETAILS")
      .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
      .setColor(0xff0000)
      .setDescription("**Name** : Eren Jeager, Training Corps.\n**Rarity** : ★★★★.\n**Tags** : Training Corps.\n**SP Cost** : 4.")
      .addField("-------","**Attribute** : <:redlotus:609770604299812884> Crimson.\n**Ability** : <:None:609767858364481589> No Ability.\n**Attack type** : <:Assault:609769649281957897> 3D maneuver (single/offensive).\n\nApproach the enemy and launch a single attack.")
      .addBlankField()
      .setImage("https://cdn.discordapp.com/attachments/596436269110657086/596436337809162265/stand_000012.png")
      .setThumbnail("https://cdn.discordapp.com/attachments/596408171346657304/596408241215242241/card_000012.png")
      .addField("Leader Skill",
        "Increase the critical rate of all 'Crimson' units in the deck by 8% during the battle.")
      .addField("Potential Skill", "The damage to the enemy is always increased by 5% during the battle.", true)
      .addField("SP Skill", "Inflict small damage to the specified enemy three times and break away.", true)
      .addBlankField()

      message.channel.send({embed});
  }
  if(message.content == '--marlo4') {
    const embed = new Discord.RichEmbed()
      .setTitle("UNIT DETAILS")
      .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
      .setColor(0xff0000)
      .setDescription("**Name** : Marlo Freudenberg, Military Police.\n**Rarity** : ★★★★.\n**Tags** : Military Police.\n**SP Cost** : 2.")
      .addField("-------","**Attribute** : <:redlotus:609770604299812884> Crimson.\n**Ability** : <:Gunner:609767858209292300> Blind.\n**Attack type** : <:Gunner:609769494122070016> Gunmen (single/Attack).\nMove to a place sightly away from the enemy and launch a single gun shot.")
      .addBlankField()
      .setImage("https://cdn.discordapp.com/attachments/596436269110657086/596436396479217789/stand_000019.png")
      .setThumbnail("https://cdn.discordapp.com/attachments/596408171346657304/596847268305567754/card_000019.png")
      .addField("Leader Skill",
        "Increase SP gauge stake for all 'Crimson' units in the deck by 12% at the start of the battle.")
      .addField("Potential Skill", "The damage to the enemy is always increased by 5% during the battle.", true)
      .addField("SP Skill", "Inflict eye damage (small) on a specified range of enemies.", true)
      .addBlankField()

      message.channel.send({embed});
  }
  if(message.content == '--historia4') {
    const embed = new Discord.RichEmbed()
      .setTitle("UNIT DETAILS")
      .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
      .setColor(0x077bd4)
      .setDescription("**Name** : Krista Lenz, Training Corps.\n**Rarity** : ★★★★.\n**Tags** : Training Corps.\n**SP Cost** : 4.")
      .addField("-------","**Attribute** : <:blue:609770604341755963> Sky Blue.\n**Ability** : <:None:609767858364481589> No Ability.\n**Attack type** : <:Assault:609769649281957897> 3D maneuver (single/offensive).\nApproach the enemy and launch a single attack.")
      .addBlankField()
      .setImage("https://cdn.discordapp.com/attachments/596436269110657086/596436389441044481/stand_000016.png")
      .setThumbnail("https://cdn.discordapp.com/attachments/596408171346657304/596848828590719004/card_000016.png")
      .addField("Leader Skill",
        "Increase the maximum HP of all 'Sky Blue' units in the deck by 12% during the battle.")
      .addField("Potential Skill", "The damage to the enemy is always increased by 5% during the battle.", true)
      .addField("SP Skill", "Inflict small damage to the specified enemy three times and break away.", true)
      .addBlankField()

      message.channel.send({embed});
  }

  if(message.content == '--mikasa4') {
    const embed = new Discord.RichEmbed()
      .setTitle("UNIT DETAILS")
      .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
      .setColor(0x077bd4)
      .setDescription("**Name** : Mikasa Ackerman, Training Corps.\n**Rarity** : ★★★★.\n**Tags** : Training Corps.\n**SP Cost** : 5.")
      .addField("-------","**Attribute** : <:blue:609770604341755963> Sky Blue.\n**Ability** : <:None:609767858364481589> No Ability.\n**Attack type** : <:AOE:609769494105161729> 3D maneuver (single/offensive).\nAttack enemy and all enemies around it.")
      .addBlankField()
      .setImage("https://media.discordapp.net/attachments/596436269110657086/596436326291865620/stand_000001.png")
      .setThumbnail("https://cdn.discordapp.com/attachments/596408171346657304/596408222722555906/card_000001.png")
      .addField("Leader Skill",
        "Increase the SP gauge amount of all 'Sky Blue' units in the deck by 12% at the start of the battle")
      .addField("Potential Skill", "The damage to the enemy is always increased by 5% during the battle.", true)
      .addField("SP Skill", "Attack enemies within the specified range 6 times with up to 3 times per body.", true)
      .addBlankField()

      message.channel.send({embed});
  }

  if(message.content == '--mobit4') {
    const embed = new Discord.RichEmbed()
      .setTitle("UNIT DETAILS")
      .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
      .setColor(0x077bd4)
      .setDescription("**Name** : Moblit Berner, Deputy Chief.\n**Rarity** : ★★★★.\n**Tags** : Survey Corps.\n**SP Cost** : 3.")
      .addField("-------","**Attribute** : <:blue:609770604341755963> Sky Blue.\n**Ability** : <:None:609767858364481589> No Ability.\n**Attack type** : <:Armcutter:609769494059024396> 3D maneuver (single/arm).\nHe launches a single attack on the designated enemy's arm and then leaves. The enemy whose arms are cut loses attack performance.")
      .addBlankField()
      .setImage("https://cdn.discordapp.com/attachments/596436269110657086/596436376174723081/stand_000014.png")
      .setThumbnail("https://cdn.discordapp.com/attachments/596408171346657304/596408244369358861/card_000014.png")
      .addField("Leader Skill",
        "Increase SP gauge speed for all units with 'Survey Corps' tag in the deck by 40% during the battle")
      .addField("Potential Skill", "The damage to the enemy is always increased by 5% during the battle.", true)
      .addField("SP Skill", "Inflict arm damage (small) twice on the specified enemy and break away.", true)
      .addBlankField()

      message.channel.send({embed});
  }
  if(message.content == '--marco4') {
    const embed = new Discord.RichEmbed()
      .setTitle("UNIT DETAILS")
      .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
      .setColor(0xebc700)
      .setDescription("**Name** : Marco Pot, Survey Corps.\n**Rarity** : ★★★★.\n**Tags** : Training Corp.\n**SP Cost** : 4.")
      .addField("-------","**Attribute** : <:gold:609770604249481216> Gold.\n**Ability** : <:None:609767858364481589> No Ability.\n**Attack type** : <:AOE:609769494105161729> 3D maneuver (single/offensive).\nAttack enemy and all enemies around it.")
      .addBlankField()
      .setImage("https://cdn.discordapp.com/attachments/596436269110657086/596436400895950877/stand_000021.png")
      .setThumbnail("https://cdn.discordapp.com/attachments/596408171346657304/596408265928212500/card_000021.png")
      .addField("Leader Skill",
        "Increase the attack power of all units with the 'Training Corps' tag in the deck by 16% during the battle.")
      .addField("Potential Skill", "The damage to the enemy is always increased by 5% during the battle.", true)
      .addField("SP Skill", "Attack enemies within the specified range 6 times with up to 3 times per body.", true)
      .addBlankField()

      message.channel.send({embed});
  }

  if(message.content == '--mitabi4') {
    const embed = new Discord.RichEmbed()
      .setTitle("UNIT DETAILS")
      .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
      .setColor(0xebc700)
      .setDescription("**Name** : Mitabi Jarnach, The garrison.\n**Rarity** : ★★★★.\n**Tags** : Garrison.\n**SP Cost** : 4.")
      .addField("-------","**Attribute** : <:gold:609770604249481216> Gold.\n**Ability** : <:None:609767858364481589> No Ability.\n**Attack type** : <:Assault:609769649281957897> 3D maneuver (single/offensive).\nApproach the enemy and launch a single attack.")
      .addBlankField()
      .setImage("https://cdn.discordapp.com/attachments/596436269110657086/596436430431977475/stand_000029.png")
      .setThumbnail("https://cdn.discordapp.com/attachments/596408171346657304/596408273553326100/card_000029.png")
      .addField("Leader Skill",
        "Increase SP gauge speed for all 'Gold' units in the deck by 16% during the battle")
      .addField("Potential Skill", "The damage to the enemy is always increased by 5% during the battle.", true)
      .addField("SP Skill", "Inflict small damage to the specified enemy three times and break away.", true)
      .addBlankField()

      message.channel.send({embed});
  }

  if(message.content == '--nile4') {
    const embed = new Discord.RichEmbed()
      .setTitle("UNIT DETAILS")
      .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
      .setColor(0xebc700)
      .setDescription("**Name** : Nile Dork, General of the military police.\n**Rarity** : ★★★★.\n**Tags** : Military Police.\n**SP Cost** : 2.")
      .addField("-------","**Attribute** : <:gold:609770604249481216> Gold.\n**Ability** : <:Gunner:609767858209292300> Blind.\n**Attack type** : <:Gunner:609769494122070016> Gunmen (single/Attack).\nMove to a place sightly away from the enemy and launch a single gun shot.")
      .addBlankField()
      .setImage("https://cdn.discordapp.com/attachments/596436269110657086/596436483112697856/stand_000058.png")
      .setThumbnail("https://cdn.discordapp.com/attachments/596408171346657304/596408341291466805/card_000058.png")
      .addField("Leader Skill",
        "Increase the maximum HP of all 'Gold' units in the deck by 12% during the battle")
      .addField("Potential Skill", "The damage to the enemy is always increased by 5% during the battle.", true)
      .addField("SP Skill", "Inflict eye damage (small) on a specified range of enemies.", true)
      .addBlankField()

      message.channel.send({embed});
  }
  if(message.content == '--gunta4') {
    const embed = new Discord.RichEmbed()
      .setTitle("UNIT DETAILS")
      .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
      .setColor(0xadadad)
      .setDescription("**Name** : Gunta Schultz, Levi's Group.\n**Rarity** : ★★★★.\n**Tags** : Survey Corps.\n**SP Cost** : 4.")
      .addField("-------","**Attribute** : <:silver:609770604048023573> Silver.\n**Ability** : <:None:609767858364481589> No Ability.\n**Attack type** : <:Assault:609769649281957897> 3D maneuver (single/offensive).\nApproach the enemy and launch a single attack.")
      .addBlankField()
      .setImage("https://cdn.discordapp.com/attachments/596436269110657086/596436442566361158/stand_000033.png")
      .setThumbnail("https://cdn.discordapp.com/attachments/596408171346657304/596408277970190357/card_000033.png")
      .addField("Leader Skill",
        "Increase SP gauge amount for all 'Silver' units in deck by 12% at the start of battle.")
      .addField("Potential Skill", "The damage to the enemy is always increased by 5% during the battle.", true)
      .addField("SP Skill", "Inflict small damage to the specified enemy three times and break away.", true)
      .addBlankField()

      message.channel.send({embed});
  }

  if(message.content == '--ymir4') {
    const embed = new Discord.RichEmbed()
      .setTitle("UNIT DETAILS")
      .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
      .setColor(0xadadad)
      .setDescription("**Name** : Ymir, Training Corps.\n**Rarity** : ★★★★.\n**Tags** : Training Corps.\n**SP Cost** : 4.")
      .addField("-------","**Attribute** : <:silver:609770604048023573> Silver.\n**Ability** : <:None:609767858364481589> No Ability.\n**Attack type** : <:Assault:609769649281957897> 3D maneuver (single/offensive).\nApproach the enemy and launch a single attack.")
      .addBlankField()
      .setImage("https://cdn.discordapp.com/attachments/596436269110657086/596436516390174751/stand_000072.png")
      .setThumbnail("https://cdn.discordapp.com/attachments/596408171346657304/596408396153094162/card_000072.png")
      .addField("Leader Skill",
        "Increase SP gauge speed for units with all 'Training Corps' tag in deck by 40% during the battle.")
      .addField("Potential Skill", "The damage to the enemy is always increased by 5% during the battle.", true)
      .addField("SP Skill", "Inflict small damage to the specified enemy three times and break away.", true)
      .addBlankField()

      message.channel.send({embed});
  }

  if(message.content == '--hugo4') {
    const embed = new Discord.RichEmbed()
      .setTitle("UNIT DETAILS")
      .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
      .setColor(0xadadad)
      .setDescription("**Name** : Hugo, The Garrison.\n**Rarity** : ★★★★.\n**Tags** : Garrison.\n**SP Cost** : 4.")
      .addField("-------","**Attribute** : <:silver:609770604048023573> Silver.\n**Ability** : <:None:609767858364481589> No Ability.\n**Attack type** : <:cannon:610888945772920867> Interceptor/Grape bullet cannon.\nAfter placing in the designated area, shot fire on all enemies within the range.")
      .addBlankField()
      .setImage("https://cdn.discordapp.com/attachments/596436269110657086/596436612477485250/stand_006999.png")
      .setThumbnail("https://cdn.discordapp.com/attachments/596408171346657304/596408429971636228/card_006999.png")
      .addField("Leader Skill",
        "Increase the attack power of all units with 'Garrison' tag in the deck by 16% during the battle.")
      .addField("Potential Skill", "The damage to the enemy is always increased by 5% during the battle.", true)
      .addField("SP Skill", "Fire a shot three times from a specified location.", true)
      .addBlankField()

      message.channel.send({embed});
  }

  if(message.content == '--hitch4') {
    const embed = new Discord.RichEmbed()
      .setTitle("UNIT DETAILS")
      .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
      .setColor(0x260652)
      .setDescription("**Name** : Hitch, Military Police.\n**Rarity** : ★★★★.\n**Tags** : Military Police.\n**SP Cost** : 2.")
      .addField("-------","**Attribute** : <:jetblack:609770604270452769> Jet Black.\n**Ability** : <:Gunner:609767858209292300> Blind.\n**Attack type** : <:Gunner:609769494122070016> Gunmen (single/Attack).\nMove to a place sightly away from the enemy and launch a single gun shot.")
      .addBlankField()
      .setImage("https://cdn.discordapp.com/attachments/596436269110657086/596436397905281027/stand_000020.png")
      .setThumbnail("https://cdn.discordapp.com/attachments/596408171346657304/596408265345335306/card_000020.png")
      .addField("Leader Skill",
        "Increase the critical rate of all 'Jet Black' units in the deck by 8% during the battle.")
      .addField("Potential Skill", "The damage to the enemy is always increased by 5% during the battle.", true)
      .addField("SP Skill", "Inflict eye damage (small) on a specified range of enemies.", true)
      .addBlankField()

      message.channel.send({embed});
  }
  if(message.content == '--hannes4') {
    const embed = new Discord.RichEmbed()
      .setTitle("UNIT DETAILS")
      .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
      .setColor(0x260652)
      .setDescription("**Name** : Hannes, The Garrison.\n**Rarity** : ★★★★.\n**Tags** : Garrison.\n**SP Cost** : 2.")
      .addField("-------","**Attribute** : <:jetblack:609770604270452769> Jet Black.\n**Ability** : <:None:609767858364481589> No Ability.\n**Attack type** : <:Legcutter:609769493723348993> 3D maneuver (single/foot).\n\nLaunch a single attack on the designated enemy's foot and then break away. The enemy whose leg was cut loses its movement performance.")
      .addBlankField()
      .setImage("https://cdn.discordapp.com/attachments/596436269110657086/596436394595844106/stand_000018.png")
      .setThumbnail("https://cdn.discordapp.com/attachments/596408171346657304/596980990434476032/card_000018.png")
      .addField("Leader Skill",
        "Increase SP gauge speed for all units with 'Garrison' tag in the deck by 40% during the battle.")
      .addField("Potential Skill", "The damage to the enemy is always increased by 5% during the battle.", true)
      .addField("SP Skill", "Make a small leg damage to the specified enemy twice.", true)
      .addBlankField()

      message.channel.send({embed});
  }

  //============== 3 STARS ==============//
  if(message.content == '--connie3_2') {
    const embed = new Discord.RichEmbed()
      .setTitle("UNIT DETAILS")
      .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
      .setColor(0xff0000)
      .setDescription("**Name** : Connie Springer, The first team.\n**Rarity** : ★★★.\n**Tags** : Training Corps.\n**SP Cost** : 3.")
      .addField("-------","**Attribute** : <:redlotus:609770604299812884> Crimson.\n**Ability** : <:None:609767858364481589> No Ability.\n**Attack type** : <:Assault:609769649281957897> 3D maneuver (single/offensive).\nApproach the enemy and launch a single attack.")
      .addBlankField()
      .setImage("https://cdn.discordapp.com/attachments/596436269110657086/596436334692794397/stand_000008.png")
      .setThumbnail("https://cdn.discordapp.com/attachments/596408171346657304/596984043925405706/card_000008.png")
      .addField("Leader Skill",
        "Increase SP gauge stake for all 'Crimson' units in the deck by 13% at the start of the battle.")
      .addField("Potential Skill", "The damage to the enemy is always increased by 5% during the battle.", true)
      .addField("SP Skill", "Inflict damage on a specified range of enemies.", true)
      .addBlankField()

      message.channel.send({embed});
  }

  if(message.content == '--samuel3') {
    const embed = new Discord.RichEmbed()
      .setTitle("UNIT DETAILS")
      .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
      .setColor(0xff0000)
      .setDescription("**Name** : Samuel, Training Corps.\n**Rarity** : ★★★.\n**Tags** : Training Corps.\n**SP Cost** : 4.")
      .addField("-------","**Attribute** : <:redlotus:609770604299812884> Crimson.\n**Ability** : <:None:609767858364481589> No Ability.\n**Attack type** : <:Assault:609769649281957897> 3D maneuver (single/offensive).\nApproach the enemy and hit once. Launch a single attack of great damage.")
      .addBlankField()
      .setImage("https://cdn.discordapp.com/attachments/596436269110657086/596436449147092992/stand_000046.png")
      .setThumbnail("https://cdn.discordapp.com/attachments/596408171346657304/596986390848471052/card_000046.png")
      .addField("Leader Skill",
        "Increase the SP gauge amount of all 'Crimson' units in the deck by 8% at the start of the battle.")
      .addField("Potential Skill", "The damage to the enemy is always increased by 5% during the battle.", true)
      .addField("SP Skill", "Inflict small damage to the specified enemy three times and break away", true)
      .addBlankField()

      message.channel.send({embed});
  }

  if(message.content == '--dennis3') {
    const embed = new Discord.RichEmbed()
      .setTitle("UNIT DETAILS")
      .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
      .setColor(0xff0000)
      .setDescription("**Name** : Dennis Eiblinger, Military Police.\n**Rarity** : ★★★.\n**Tags** : Military Police.\n**SP Cost** : 2.")
      .addField("-------","**Attribute** : <:redlotus:609770604299812884> Crimson.\n**Ability** : <:Gunner:609767858209292300> Blind.\n**Attack type** : <:Gunner:609769494122070016> Gunmen (single/Attack).\nMove to a place sightly away from the enemy and launch a single gun shot.")
      .addBlankField()
      .setImage("https://cdn.discordapp.com/attachments/596436269110657086/596436524539576330/stand_000083.png")
      .setThumbnail("https://cdn.discordapp.com/attachments/596408171346657304/596408424695201795/card_000083.png")
      .addField("Leader Skill",
        "Increase the attack power of all 'Crimson' units in the deck by 6% during the battle.")
      .addField("Potential Skill", "The damage to the enemy is always increased by 5% during the battle.", true)
      .addField("SP Skill", "Inflict eye damage (small) on a specified range of enemies.", true)
      .addBlankField()

      message.channel.send({embed});
  }

  if(message.content == '--anka3') {
    const embed = new Discord.RichEmbed()
      .setTitle("UNIT DETAILS")
      .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
      .setColor(0xff0000)
      .setDescription("**Name** : Anka Rheinberger, The Garrison.\n**Rarity** : ★★★.\n**Tags** : Garrison.\n**SP Cost** : 2.")
      .addField("-------","**Attribute** : <:redlotus:609770604299812884> Crimson.\n**Ability** : <:None:609767858364481589> No Ability.\n**Attack type** : <:Support:609769494142910464> 3D maneuver (single/offensive).\nLaunch a single attack on the specified enemy and then break away.")
      .addBlankField()
      .setImage("https://cdn.discordapp.com/attachments/596436269110657086/596436481300496405/stand_000057.png")
      .setThumbnail("https://cdn.discordapp.com/attachments/596408171346657304/596408340133707804/card_000057.png")
      .addField("Leader Skill",
        "Increase the SP gauge amount of all 'Crimson' units in the deck by 8% at the start of the battle.")
      .addField("Potential Skill", "The damage to the enemy is always increased by 5% during the battle.", true)
      .addField("SP Skill", "Inflict small damage to the specified enemy three times and break away.", true)
      .addBlankField()

      message.channel.send({embed});
  }

  if(message.content == '--tom3') {
    const embed = new Discord.RichEmbed()
      .setTitle("UNIT DETAILS")
      .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
      .setColor(0xff0000)
      .setDescription("**Name** : Tom, Training Corps.\n**Rarity** : ★★★.\n**Tags** : Training Crops.\n**SP Cost** : 2.")
      .addField("-------","**Attribute** : <:redlotus:609770604299812884> Crimson.\n**Ability** : <:None:609767858364481589> No Ability.\n**Attack type** : <:Legcutter:609769493723348993> 3D maneuver (single/foot).\nLaunch a single attack on the designated enemy's foot and then break away. The enemy whose leg was cut loses its movement performance.")
      .addBlankField()
      .setImage("https://cdn.discordapp.com/attachments/596436269110657086/596436477898915856/stand_000055.png")
      .setThumbnail("https://cdn.discordapp.com/attachments/596408171346657304/596408333783662627/card_000055.png")
      .addField("Leader Skill",
        "Increase the critical rate of all 'Crimson' units in the deck by 6% during the battle.")
      .addField("Potential Skill", "The damage to the enemy is always increased by 5% during the battle.", true)
      .addField("SP Skill", "Make a small leg damage to the specified enemy twice.", true)
      .addBlankField()

      message.channel.send({embed});
  }

  if(message.content == '--mina3') {
    const embed = new Discord.RichEmbed()
      .setTitle("UNIT DETAILS")
      .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
      .setColor(0xff0000)
      .setDescription("**Name** : Mina Carolina, Training Corps.\n**Rarity** : ★★★.\n**Tags** : Training Corps.\n**SP Cost** : 4.")
      .addField("-------","**Attribute** : <:redlotus:609770604299812884> Crimson.\n**Ability** : <:None:609767858364481589> No Ability.\n**Attack type** : <:Assault:609769649281957897> 3D maneuver (single/offensive).\nApproach the enemy and launch a single attack.")
      .addBlankField()
      .setImage("https://cdn.discordapp.com/attachments/596436269110657086/596436405383593987/stand_000023.png")
      .setThumbnail("https://cdn.discordapp.com/attachments/596408171346657304/596408268956368896/card_000023.png")
      .addField("Leader Skill",
        "Increase the maximum HP of all units with the 'Training Corps' tag in the deck by 24% during the battle.")
      .addField("Potential Skill", "The damage to the enemy is always increased by 5% during the battle.", true)
      .addField("SP Skill", "Inflict small damage to the specified enemy three times and break away", true)
      .addBlankField()

      message.channel.send({embed});
  }

  if(message.content == '--petra3') {
    const embed = new Discord.RichEmbed()
      .setTitle("UNIT DETAILS")
      .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
      .setColor(0x077bd4)
      .setDescription("**Name** : Petra Lal, Levi's Group.\n**Rarity** : ★★★.\n**Tags** : Survey Corps.\n**SP Cost** : 4.")
      .addField("-------","**Attribute** : <:blue:609770604341755963> Sky Blue.\n**Ability** : <:None:609767858364481589> No Ability.\n**Attack type** : <:Assault:609769649281957897> 3D maneuver (single/offensive).\nApproach the enemy and launch a single attack.")
      .addBlankField()
      .setImage("https://cdn.discordapp.com/attachments/596436269110657086/596436437847769138/stand_000031.png")
      .setThumbnail("https://cdn.discordapp.com/attachments/596408171346657304/597014262690480138/card_000031.png")
      .addField("Leader Skill",
        "Increase the attack power of all units with the 'Survey Corps' tag in the deck by 18% during the battle.")
      .addField("Potential Skill", "The damage to the enemy is always increased by 5% during the battle.", true)
      .addField("SP Skill", "Inflicts small damage on a specified range of enemies.", true)
      .addBlankField()

      message.channel.send({embed});
  }

  if(message.content == '--mirius3') {
    const embed = new Discord.RichEmbed()
      .setTitle("UNIT DETAILS")
      .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
      .setColor(0x077bd4)
      .setDescription("**Name** : Mirius, Training Corps.\n**Rarity** : ★★★.\n**Tags** : Training Corps.\n**SP Cost** : 4.")
      .addField("-------","**Attribute** : <:blue:609770604341755963> Sky Blue.\n**Ability** : <:None:609767858364481589> No Ability.\n**Attack type** : <:Assault:609769649281957897> 3D maneuver (single/offensive).\nApproach the enemy and launch a single attack.")
      .addBlankField()
      .setImage("https://media.discordapp.net/attachments/596436269110657086/596436476754001931/stand_000050.png")
      .setThumbnail("https://cdn.discordapp.com/attachments/596408171346657304/596408330885267458/card_000050.png")
      .addField("Leader Skill",
        "Increase the attack power of all 'Sky Blue' units in the deck by 6% during the battle.")
      .addField("Potential Skill", "The damage to the enemy is always increased by 5% during the battle.", true)
      .addField("SP Skill", "Inflict small damage to the specified enemy three times and break away.", true)
      .addBlankField()

      message.channel.send({embed});
  }

  if(message.content == '--thomas3') {
    const embed = new Discord.RichEmbed()
      .setTitle("UNIT DETAILS")
      .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
      .setColor(0x077bd4)
      .setDescription("**Name** : Thomas Wagner, Training Corps.\n**Rarity** : ★★★.\n**Tags** : Training Corps.\n**SP Cost** : 4.")
      .addField("-------","**Attribute** : <:blue:609770604341755963> Sky Blue.\n**Ability** : <:Drive:609767858150309910> Drive.\n**Attack type** : <:Assault:609769649281957897> 3D maneuver (single/offensive).\nApproach the enemy and launch a single attack that increases the damage with each stroke.")
      .addBlankField()
      .setImage("https://cdn.discordapp.com/attachments/596436269110657086/597018629401477142/stand_000024-CAB-ba1b0076d5aeda9978e5ef3c19608d16-11741842378648315565.png")
      .setThumbnail("https://cdn.discordapp.com/attachments/596408171346657304/596408270487289856/card_000024.png")
      .addField("Leader Skill",
        "Increase the critical rate of all 'Sky Blue' units in the deck by 6% during the battle.")
      .addField("Potential Skill", "The damage to the enemy is always increased by 5% during the battle.", true)
      .addField("SP Skill", "Inflict small damage to the specified enemy three times and break away.", true)
      .addBlankField()

      message.channel.send({embed});
  }

  if(message.content == '--boris3') {
    const embed = new Discord.RichEmbed()
      .setTitle("UNIT DETAILS")
      .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
      .setColor(0x077bd4)
      .setDescription("**Name** : Boris Foylener, Military Police.\n**Rarity** : ★★★.\n**Tags** : Military police.\n**SP Cost** : 2.")
      .addField("-------","**Attribute** : <:blue:609770604341755963> Sky Blue.\n**Ability** : <:Gunner:609767858209292300> Blind.\n**Attack type** : <:Gunner:609769494122070016> Gunmen (single/Attack).\nMove to a place sightly away from the enemy and launch a single gun shot.")
      .addBlankField()
      .setImage("https://cdn.discordapp.com/attachments/596436269110657086/596436549009145856/stand_000085.png")
      .setThumbnail("https://cdn.discordapp.com/attachments/596408171346657304/596408428000182285/card_000085.png")
      .addField("Leader Skill",
        "Increase SP gauge increase speed for all 'Sky Blue' units in the deck by 12% during the battle.")
      .addField("Potential Skill", "The damage to the enemy is always increased by 5% during the battle.", true)
      .addField("SP Skill", "Inflict eye damage (small) on a specified range of enemies.", true)
      .addBlankField()

      message.channel.send({embed});
  }

  if(message.content == '--hannah3') {
    const embed = new Discord.RichEmbed()
      .setTitle("UNIT DETAILS")
      .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
      .setColor(0x077bd4)
      .setDescription("**Name** : Hannah, Training Corps.\n**Rarity** : ★★★.\n**Tags** : Training Corps.\n**SP Cost** : 2.")
      .addField("-------","**Attribute** : <:blue:609770604341755963> Sky Blue.\n**Ability** : <:None:609767858364481589> No Ability.\n**Attack type** : <:Support:609769494142910464> 3D maneuver (single/offensive).\nLaunch a single attack on the specified enemy and then break away.")
      .addBlankField()
      .setImage("https://cdn.discordapp.com/attachments/596436269110657086/596436462094909451/stand_000048.png")
      .setThumbnail("https://cdn.discordapp.com/attachments/596408171346657304/597021743885975566/card_000048.png")
      .addField("Leader Skill",
        "Increase the SP gauge amount of all 'Sky Blue' units in the deck by 8% at the start of the battle.")
      .addField("Potential Skill", "The damage to the enemy is always increased by 5% during the battle.", true)
      .addField("SP Skill", "Inflict small damage to the specified enemy three times and break away.", true)
      .addBlankField()

      message.channel.send({embed});
  }

  if(message.content == '--franz3') {
    const embed = new Discord.RichEmbed()
      .setTitle("UNIT DETAILS")
      .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
      .setColor(0x077bd4)
      .setDescription("**Name** : Franz, Training Corps.\n**Rarity** : ★★★.\n**Tags** : Training Corps.\n**SP Cost** : 3.")
      .addField("-------","**Attribute** : <:blue:609770604341755963> Sky Blue.\n**Ability** : <:abil<:None:609767858364481589> No Ability.n**Attack type** : <:Armcutter:609769494059024396> 3D maneuver (single/arm).\nHe launches a single attack on the designated enemy's arm and then leaves. The enemy whose arms are cut loses attack performance.")
      .addBlankField()
      .setImage("https://cdn.discordapp.com/attachments/596436269110657086/596436469577416870/stand_000047.png")
      .setThumbnail("https://cdn.discordapp.com/attachments/596408171346657304/597026766368014356/card_000047.png")
      .addField("Leader Skill",
        "Increase the critical rate of all units with the 'Training Corps' tag in the deck by 12% during the battle.")
      .addField("Potential Skill", "The damage to the enemy is always increased by 5% during the battle.", true)
      .addField("SP Skill", "Inflict arm damage (small) twice on the specified enemy and break away.", true)
      .addBlankField()

      message.channel.send({embed});
  }

  if(message.content == '--connie3') {
    const embed = new Discord.RichEmbed()
      .setTitle("UNIT DETAILS")
      .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
      .setColor(0x077bd4)
      .setDescription("**Name** : Connie Springer, Training Corps.\n**Rarity** : ★★★.\n**Tags** : Training Corps.\n**SP Cost** : 4.\n")
      .addField("-------","**Attribute** : <:blue:609770604341755963> Sky Blue.\n**Ability** : <:None:609767858364481589> No Ability.\n**Attack type** :  <:AOE:609769494105161729> 3D maneuver (single/offensive).\nAttack enemy and all enemies around it.")
      .addBlankField()
      .setImage("https://cdn.discordapp.com/attachments/596436269110657086/596436519171129355/stand_000075.png")
      .setThumbnail("https://cdn.discordapp.com/attachments/596408171346657304/596408400074637316/card_000075.png")
      .addField("Leader Skill",
        "Increase the SP gauge amount of all units with the 'Training Corps' tag in the deck by 24% at the start of the battle.")
      .addField("Potential Skill", "The damage to the enemy is always increased by 5% during the battle.", true)
      .addField("SP Skill", "Attack enemies within the specified range 6 times with up to 3 times per body.", true)
      .addBlankField()

      message.channel.send({embed});
  }

  if(message.content == '--armin3') {
    const embed = new Discord.RichEmbed()
      .setTitle("UNIT DETAILS")
      .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
      .setColor(0x077bd4)
      .setDescription("**Name** : Armin Arlert, Training Corps.\n**Rarity** : ★★★.\n**Tags** : Training Corps.\n**SP Cost** : 3.")
      .addField("-------","**Attribute** : <:blue:609770604341755963> Sky Blue.\n**Ability** : <:None:609767858364481589> No Ability.\n**Attack type** : <:Legcutter:609769493723348993> 3D maneuver (single/foot).\nLaunch a single attack on the designated enemy's foot and then break away. The enemy whose leg was cut loses its movement performance.")
      .addBlankField()
      .setImage("https://cdn.discordapp.com/attachments/596436269110657086/596436332579127337/stand_000007.png")
      .setThumbnail("https://cdn.discordapp.com/attachments/596408171346657304/596408233938386954/card_000007.png")
      .addField("Leader Skill",
        "Increase the maximum HP of all units with the 'Training Corps' tag in the deck by 24% during the battle.")
      .addField("Potential Skill", "The damage to the enemy is always increased by 5% during the battle.", true)
      .addField("SP Skill", "Inflict foot damage (small) twice to the specified enemy and break away.", true)
      .addBlankField()

      message.channel.send({embed});
  }

  if(message.content == '--ian3') {
    const embed = new Discord.RichEmbed()
      .setTitle("UNIT DETAILS")
      .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
      .setColor(0xebc700)
      .setDescription("**Name** : Ian Dietrich, The Garrison.\n**Rarity** : ★★★.\n**Tags** : Garrison.\n**SP Cost** : 4.")
      .addField("-------","**Attribute** : <:gold:609770604249481216> Gold.\n**Ability** : <:Sweeper:609767858670534692> Sweeper.\n**Attack type** : <:Assault:609769649281957897> 3D maneuver (single/offensive).\nApproach the enemy and launch a single attack. (Prioritize the range giant to all small and surrounding enemies).")
      .addBlankField()
      .setImage("https://cdn.discordapp.com/attachments/596436269110657086/596436427017814028/stand_000027.png")
      .setThumbnail("https://cdn.discordapp.com/attachments/596408171346657304/597058936469979146/card_000026.png")
      .addField("Leader Skill",
        "Increase SP gauge stake for all 'Gold' units in the deck by 18% during the battle.")
      .addField("Potential Skill", "The damage to the enemy is always increased by 5% during the battle.", true)
      .addField("SP Skill", "Attack enemies within the specified range 6 times with up to 3 times per body.", true)
      .addBlankField()

      message.channel.send({embed});
  }

  if(message.content == '--luke3') {
    const embed = new Discord.RichEmbed()
      .setTitle("UNIT DETAILS")
      .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
      .setColor(0xebc700)
      .setDescription("**Name** : Luke Siss, Survey Corps.\n**Rarity** : ★★★.\n**Tags** : Survey Corps.\n**SP Cost** : 4.")
      .addField("-------","**Attribute** : <:gold:609770604249481216> Gold.\n**Ability** : <:Horseback:609767858406162435> Horse.\n**Attack type** : <:Assault:609769649281957897> 3D maneuver (single/offensive).\nApproach the enemy on horse, and after approaching, throw away the horse and launch a single attack.")
      .addBlankField()
      .setImage("https://cdn.discordapp.com/attachments/596436269110657086/596436447611977728/stand_000038.png")
      .setThumbnail("https://cdn.discordapp.com/attachments/596408171346657304/597064339328860193/card_000038.png")
      .addField("Leader Skill",
        "Increase the critical rate of all units with 'Survey Corps' tag in the deck by 12% during the battle.")
      .addField("Potential Skill", "The damage to the enemy is always increased by 5% during the battle.", true)
      .addField("SP Skill", "Inflict small damage to the specified enemy three times and break away.", true)
      .addBlankField()

      message.channel.send({embed});
  }

  if(message.content == '--walz3') {
    const embed = new Discord.RichEmbed()
      .setTitle("UNIT DETAILS")
      .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
      .setColor(0xebc700)
      .setDescription("**Name** : Walz, Military Police.\n**Rarity** : ★★★.\n**Tags** : Military Police.\n**SP Cost** : 2.")
      .addField("-------","**Attribute** : <:gold:609770604249481216> Gold.\n**Ability** : <:Gunner:609767858209292300> Blind.\n**Attack type** : <:Gunner:609769494122070016> Gunmen (single/Attack).\nMove to a place sightly away from the enemy and launch a single gun shot.")
      .addBlankField()
      .setImage("https://cdn.discordapp.com/attachments/596436269110657086/596436526800568360/stand_000084.png")
      .setThumbnail("https://cdn.discordapp.com/attachments/596408171346657304/596408426540826624/card_000084.png")
      .addField("Leader Skill",
        "Increase SP gauge speed for all 'Gold' units in the deck by 12% during the battle.")
      .addField("Potential Skill", "The damage to the enemy is always increased by 5% during the battle.", true)
      .addField("SP Skill", "Inflict eye damage (small) on a specified range of enemies.", true)
      .addBlankField()

      message.channel.send({embed});
  }

  if(message.content == '--daz3') {
    const embed = new Discord.RichEmbed()
      .setTitle("UNIT DETAILS")
      .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
      .setColor(0xebc700)
      .setDescription("**Name** : Daz, Training Corps.\n**Rarity** : ★★★.\n**Tags** : Training Corps.\n**SP Cost** : 3.")
      .addField("-------","**Attribute** : <:gold:609770604249481216> Gold.\n**Ability** : <:None:609767858364481589> No Ability.\n**Attack type** : <:Armcutter:609769494059024396> 3D maneuver (single/arm).\nHe launches a single attack on the designated enemy's arm and then leaves. The enemy whose arms are cut loses attack performance.")
      .addBlankField()
      .setImage("https://cdn.discordapp.com/attachments/596436269110657086/596436402376278036/stand_000022.png")
      .setThumbnail("https://cdn.discordapp.com/attachments/596408171346657304/596408267513659413/card_000022.png")
      .addField("Leader Skill",
        "Increase the attack power of all 'Gold' units in the deck by 6% during the battle.")
      .addField("Potential Skill", "The damage to the enemy is always increased by 5% during the battle.", true)
      .addField("SP Skill", "Inflict arm damage (small) twice on the specified enemy and break away.", true)
      .addBlankField()

      message.channel.send({embed});
  }

  if(message.content == '--nack3') {
    const embed = new Discord.RichEmbed()
      .setTitle("UNIT DETAILS")
      .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
      .setColor(0xebc700)
      .setDescription("**Name** : Nack, Training Corps.\n**Rarity** : ★★★.\n**Tags** : Training Corps.\n**SP Cost** : 4.")
      .addField("-------","**Attribute** : <:gold:609770604249481216> Gold.\n**Ability** : <:None:609767858364481589> No Ability.\n**Attack type** : <:Assault:609769649281957897> 3D maneuver (single/offensive).\nApproach the enemy and launch a single attack.")
      .addBlankField()
      .setImage("https://cdn.discordapp.com/attachments/596436269110657086/596436473713000615/stand_000049.png")
      .setThumbnail("https://cdn.discordapp.com/attachments/596408171346657304/596408328242987065/card_000049.png")
      .addField("Leader Skill",
        "Increase the critical rate of all 'Gold' units in the deck by 6% during the battle.")
      .addField("Potential Skill", "The damage to the enemy is always increased by 5% during the battle.", true)
      .addField("SP Skill", "Inflict small damage to the specified enemy three times and break away.", true)
      .addBlankField()

      message.channel.send({embed});
  }
  if(message.content == '--gustav3') {
    const embed = new Discord.RichEmbed()
      .setTitle("UNIT DETAILS")
      .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
      .setColor(0xebc700)
      .setDescription("**Name** : Gustav, The Garrison.\n**Rarity** : ★★★.\n**Tags** : Garrison.\n**SP Cost** : 2.")
      .addField("-------","**Attribute** : <:gold:609770604249481216> Gold.\n**Ability** : <:None:609767858364481589> No Ability.\n**Attack type** : <:Legcutter:609769493723348993> 3D maneuver (single/foot).\nLaunch a single attack on the designated enemy's foot and then break away. The enemy whose leg was cut loses its movement performance.")
      .addBlankField()
      .setImage("https://cdn.discordapp.com/attachments/596436269110657086/596436479757254664/stand_000056.png")
      .setThumbnail("https://cdn.discordapp.com/attachments/596408171346657304/596408337201889291/card_000056.png")
      .addField("Leader Skill",
        "Increase the critical rate of all units with the 'Garrison' tag in the deck by 12% during the battle.")
      .addField("Potential Skill", "The damage to the enemy is always increased by 5% during the battle.", true)
      .addField("SP Skill", "Inflict foot damage (small) twice to the specified enemy and break away.", true)
      .addBlankField()

      message.channel.send({embed});
  }

  if(message.content == '--historia3') {
    const embed = new Discord.RichEmbed()
      .setTitle("UNIT DETAILS")
      .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
      .setColor(0xadadad)
      .setDescription("**Name** : Historia Reiss, Underwater Construction Unit.\n**Rarity** : ★★★.\n**Tags** : Survey Corps.\n**SP Cost** : 4.")
      .addField("-------","**Attribute** : <:silver:609770604048023573> Silver.\n**Ability** : <:Killer:609767858603425815> Killer.\n**Attack type** : <:Assault:609769649281957897> 3D maneuver (single/offensive).\nApproach the enemy and launch a single attack.")
      .addBlankField()
      .setImage("https://cdn.discordapp.com/attachments/609757756152479773/609763227026587658/stand_001171.png")
      .setThumbnail("https://cdn.discordapp.com/attachments/609757827715694594/610899121058086959/card_001171.png")
      .addField("Leader Skill",
        "10% increase to critical rate for all 'silver' units.")
      .addField("Potential Skill", "The damage to the enemy is always increased by 5% during the battle.", true)
      .addField("SP Skill", "Deploy at specified location with an attack power increase against jumping titans.", true)
      .addBlankField()

      message.channel.send({embed});
  }

//=============== F I L T E R S ====================//

  if(message.content == '--ability') {
    const embed = new Discord.RichEmbed()
      .setTitle("ABILITIES")
      .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
      .setColor(0xe913e1)
      .addField("-------","**No Ability** <:None:609767858364481589> : No ability.\n**Power**<:HighAttack:609767858427396136> : Demonstrate High Attack Power will little chance of anti air attacks. [*--power*].\n**Cancel** <:Cancel:609767858456756304> : Cancel enemy actions  [*--cancel*].\n**Drive** <:Drive:609767858150309910>  : Increase damage by attacking continuously. [*--drive*].\n**Horse** <:Horseback:609767858406162435> :Ride and move on horse until you attack the enemy. [*--horse*].\n**Blind** <:Gunner:609767858209292300> : Take away your view by making an attack on your eyes. [*--blind*].\n**Stun** <:Stunner:609767858490048513> :Stun an enemy by hitting it several times. [*--stun*].\n**Hunter** <:Hunter:609767858460950528> : Demonstrate High Attack Power against large titans. [*--hunter*].\n**Sweeper** <:Sweeper:609767858670534692> : Attack with priority to small titans. [*--sweeper*].\n**Killer** <:Killer:609767858603425815> : Aim for a specific titan first and perform high attack power. [*--killer*].")
      .addBlankField()

      message.channel.send({embed});
  }

//=============== A T T R I B U T E S ====================//
  if(message.content == '--skyblue') {
    const embed = new Discord.RichEmbed()
      .setTitle("SKY BLUE UNITS")
      .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
      .setColor(0x077bd4)
      .setImage("https://cdn.discordapp.com/attachments/611243030107652101/611250983766589469/skyBlue.png")
      .setThumbnail("https://cdn.discordapp.com/attachments/609769191376945172/609770557671604318/blue.png")

      message.channel.send({embed});
  }

  if(message.content == '--crimson') {
    const embed = new Discord.RichEmbed()
      .setTitle("CRIMSON UNITS")
      .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
      .setColor(0xff0000)
      .setImage("https://cdn.discordapp.com/attachments/611243030107652101/611251894056255508/crimson.png")
      .setThumbnail("https://cdn.discordapp.com/attachments/609769191376945172/609770564453662731/redlotus.png")

      message.channel.send({embed});
  }

  if(message.content == '--silver') {
    const embed = new Discord.RichEmbed()
      .setTitle("SILVER UNITS")
      .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
      .setColor(0xadadad)
      .setImage("https://cdn.discordapp.com/attachments/611243030107652101/611251936272056334/Silver.png")
      .setThumbnail("https://cdn.discordapp.com/attachments/609769191376945172/609770569092562949/silver.png")

      message.channel.send({embed});
  }

  if(message.content == '--gold') {
    const embed = new Discord.RichEmbed()
      .setTitle("GOLD UNITS")
      .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
      .setColor(0xebc700)
      .setImage("https://cdn.discordapp.com/attachments/611243030107652101/611252602591510528/gold.png")
      .setThumbnail("https://cdn.discordapp.com/attachments/609769191376945172/609770560288981004/gold.png")

      message.channel.send({embed});
  }

  if(message.content == '--jetblack') {
    const embed = new Discord.RichEmbed()
      .setTitle("JET BLACK UNITS")
      .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
      .setColor(0x260652)
      .setImage("https://cdn.discordapp.com/attachments/611243030107652101/611253100413452289/JetBlack.png")
      .setThumbnail("https://cdn.discordapp.com/attachments/609769191376945172/609770562213904394/jetblack.png")

      message.channel.send({embed});
  }
//=============== C O R P S ====================//

  if(message.content == '--training') {
    const embed = new Discord.RichEmbed()
      .setTitle("TRAINING CORPS")
      .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
      .setColor(0xffffff)
      .setImage("https://cdn.discordapp.com/attachments/611243030107652101/611254244972167208/TrainingCorps.png")
      .setThumbnail("https://cdn.discordapp.com/attachments/609769191376945172/611256160967983144/attack-on-titan-logo-png-2.png")

      message.channel.send({embed});
  }

  if(message.content == '--survey') {
    const embed = new Discord.RichEmbed()
      .setTitle("SURVEY CORPS")
      .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
      .setColor(0x01458c)
      .setImage("https://cdn.discordapp.com/attachments/611243030107652101/611260284387983361/SurveyCorps.png")
      .setThumbnail("https://cdn.discordapp.com/attachments/609769191376945172/611259374286929950/16530d14b351c947faa662eb18ec16f2.png")

      message.channel.send({embed});
  }

  if(message.content == '--military') {
    const embed = new Discord.RichEmbed()
      .setTitle("MILITARY POLICE")
      .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
      .setColor(0x0a5f22)
      .setImage("https://cdn.discordapp.com/attachments/611243030107652101/611270261765046322/MilitaryPolice.png")
      .setThumbnail("https://cdn.discordapp.com/attachments/609769191376945172/611269860898373682/skin-request-aot-military-police-skin-skin-requests-war-military-police-png-500_543.png")

      message.channel.send({embed});
  }

  if(message.content == '--garrison') {
    const embed = new Discord.RichEmbed()
      .setTitle("GARRISON")
      .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
      .setColor(0x7f1d1d)
      .setImage("https://cdn.discordapp.com/attachments/611243030107652101/611282006889988118/Garrison.png")
      .setThumbnail("https://cdn.discordapp.com/attachments/609769191376945172/611282435015049237/f516a9ca08d1fdbf2de1336d910ae17e.png")

      message.channel.send({embed});
  }
  //=============== T Y P E ====================//

  if(message.content == '--aoe') {
    const embed = new Discord.RichEmbed()
      .setTitle("AOE UNITS")
      .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
      .setColor(0xa91325)
      .setImage("https://cdn.discordapp.com/attachments/611243030107652101/611257782544629760/AOE.png")
      .setThumbnail("https://cdn.discordapp.com/attachments/609769191376945172/609769262193573908/role_001112.png")

      message.channel.send({embed});
  }

  if(message.content == '--support') {
    const embed = new Discord.RichEmbed()
      .setTitle("SUPPORT UNITS")
      .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
      .setColor(0x4c1178)
      .setImage("https://cdn.discordapp.com/attachments/611243030107652101/611261251720445952/Support.png")
      .setThumbnail("https://cdn.discordapp.com/attachments/609769191376945172/609769272494915595/role_002111.png")

      message.channel.send({embed});
  }

  if(message.content == '--leg') {
    const embed = new Discord.RichEmbed()
      .setTitle("LEG CUTTER UNITS")
      .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
      .setColor(0x4c1178)
      .setImage("https://cdn.discordapp.com/attachments/611243030107652101/611262143026823168/LegCutter.png")
      .setThumbnail("https://cdn.discordapp.com/attachments/609769191376945172/609769311661195275/role_002311.png")

      message.channel.send({embed});
  }

  if(message.content == '--arm') {
    const embed = new Discord.RichEmbed()
      .setTitle("ARM CUTTER UNITS")
      .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
      .setColor(0x4c1178)
      .setImage("https://cdn.discordapp.com/attachments/611243030107652101/611266285933822009/Arm_Cutter.png")
      .setThumbnail("https://cdn.discordapp.com/attachments/609769191376945172/609769307748171816/role_002211.png")

      message.channel.send({embed});
  }

  if(message.content == '--gunner') {
    const embed = new Discord.RichEmbed()
      .setTitle("GUNNER UNITS")
      .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
      .setColor(0xa91325)
      .setImage("https://cdn.discordapp.com/attachments/611243030107652101/611267659606261800/Gunner.png")
      .setThumbnail("https://cdn.discordapp.com/attachments/609769191376945172/609769264815144974/role_001210.png")

      message.channel.send({embed});
  }

  if(message.content == '--assault') {
    const embed = new Discord.RichEmbed()
      .setTitle("ASSAULT UNITS")
      .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
      .setColor(0xa91325)
      .setImage("https://cdn.discordapp.com/attachments/611243030107652101/611271473516249088/Assault.png")
      .setThumbnail("https://cdn.discordapp.com/attachments/609769191376945172/609769259136057373/role_001100.png")

      message.channel.send({embed});
  }

    //=============== A B I L I T I E S ====================//

    if(message.content == '--drive') {
      const embed = new Discord.RichEmbed()
        .setTitle("DRIVE UNITS")
        .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
        .setColor(0xf16527)
        .setImage("https://cdn.discordapp.com/attachments/611243030107652101/611273761144176695/drive.png")
        .setThumbnail("https://cdn.discordapp.com/attachments/609760240778346507/609765219228450867/ability_000004.png")

        message.channel.send({embed});
    }

    if(message.content == '--cancel') {
      const embed = new Discord.RichEmbed()
        .setTitle("CANCEL UNITS")
        .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
        .setColor(0xf16527)
        .setImage("https://cdn.discordapp.com/attachments/611243030107652101/611274690089975819/cancel.png")
        .setThumbnail("https://cdn.discordapp.com/attachments/609760240778346507/609765217546534922/ability_000003.png")

        message.channel.send({embed});
    }

    if(message.content == '--power') {
      const embed = new Discord.RichEmbed()
        .setTitle("POWER UNITS")
        .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
        .setColor(0xf16527)
        .setImage("")
        .setThumbnail("https://cdn.discordapp.com/attachments/609760240778346507/609765215495651357/ability_000002.png")

        message.channel.send({embed});
    }

    if(message.content == '--horse') {
      const embed = new Discord.RichEmbed()
        .setTitle("HORSE UNITS")
        .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
        .setColor(0xf16527)
        .setImage("https://cdn.discordapp.com/attachments/611243030107652101/611276798109679638/Horse.png")
        .setThumbnail("https://cdn.discordapp.com/attachments/609760240778346507/609765220750983180/ability_000005.png")

        message.channel.send({embed});
    }

    if(message.content == '--blind') {
      const embed = new Discord.RichEmbed()
        .setTitle("BLIND UNITS")
        .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
        .setColor(0xf16527)
        .setImage("https://cdn.discordapp.com/attachments/611243030107652101/611277879547920390/Blind.png")
        .setThumbnail("https://cdn.discordapp.com/attachments/609760240778346507/609765223590789131/ability_000006.png")

        message.channel.send({embed});
    }

    if(message.content == '--stun') {
      const embed = new Discord.RichEmbed()
        .setTitle("STUN UNITS")
        .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
        .setColor(0xf16527)
        .setImage("https://cdn.discordapp.com/attachments/611243030107652101/611278648644730882/Stunner.png")
        .setThumbnail("https://cdn.discordapp.com/attachments/609760240778346507/609765224840560640/ability_000007.png")

        message.channel.send({embed});
    }

    if(message.content == '--hunter') {
      const embed = new Discord.RichEmbed()
        .setTitle("HUNTER UNITS")
        .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
        .setColor(0xf16527)
        .setImage("https://cdn.discordapp.com/attachments/611243030107652101/611279385961431050/Hunter.png")
        .setThumbnail("https://cdn.discordapp.com/attachments/609760240778346507/609765228758171669/ability_000009.png")

        message.channel.send({embed});
    }

    if(message.content == '--sweeper') {
      const embed = new Discord.RichEmbed()
        .setTitle("SWEEPER UNITS")
        .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
        .setColor(0xf16527)
        .setImage("https://cdn.discordapp.com/attachments/611243030107652101/611280202999267362/Sweeper.png")
        .setThumbnail("https://cdn.discordapp.com/attachments/609760240778346507/609765228829212673/ability_000008.png")

        message.channel.send({embed});
    }

    if(message.content == '--killer') {
      const embed = new Discord.RichEmbed()
        .setTitle("KILLER UNITS")
        .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
        .setColor(0xf16527)
        .setImage("https://cdn.discordapp.com/attachments/611243030107652101/611280799974817795/Killer.png")
        .setThumbnail("https://cdn.discordapp.com/attachments/609760240778346507/609765229911343121/ability_000010.png")

        message.channel.send({embed});
    }

        //=============== H E L P ====================//

        if(message.content == '--help') {
          const embed = new Discord.RichEmbed()
            .setTitle("COMMANDS")
            .setAuthor("ㆍ𝕃・ ","https://cdn.discordapp.com/attachments/609769658878394368/610551375817998337/JPEG_20190812_033303.jpg")
            .setColor(0x38c5e8)
            .setThumbnail("https://cdn.discordapp.com/attachments/609769658878394368/611288906825990356/need-help-png-transparent-need-helppng-images-pluspng-help-png-266_300.png")
            .addField("CORPS"," Training Corps <:training:611287655891599414> [*--training*]\nSurvey Corps <:survey:611287993361367050> [*--survey*]\nGarrison <:garrison:611287695183839232> [*--garrison*]\nMilitary Police <:military:611287726158774397> [*--military*]")
            .addBlankField()
            .addField("ATTRIBUTES"," Sky Blue <:blue:609770604341755963> [*--skyblue*]\nCrimson <:redlotus:609770604299812884> [*--crimson*]\nSilver <:silver:609770604048023573> [*--silver*]\nGold <:gold:609770604249481216> [*--gold*]\nJet Black <:jetblack:609770604270452769> [*--jetblack*]")
            .addBlankField()
            .addField("UNIT TYPES"," Assault <:Assault:609769649281957897> [*--assault*]\nGunner <:Gunner:609769494122070016> [*--gunner*]\nAOE <:AOE:609769494105161729> [*--aoe*]\nSupport <:Support:609769494142910464> [*--support*]\nArm Cutter <:Armcutter:609769494059024396> [*--arm*]\nLeg Cutter <:Legcutter:609769493723348993> [*--leg*]")
            .addBlankField()
            .addField("ABILITY","To show all abilities and their respective commands [*--ability*]")
            .addBlankField()
            .addField("DONATIONS","*All donations are very grateful and serve to support my work as well as to improve the bot*\nhttps://www.paypal.com/donate/?token=yvnHpyQ-NUmSxHLJH9BqSvnfRJqJqTU8-OrqNaudfZ--vfCBnGX8OSdv-747CK0ZxRaj9G&country.x=ES&locale.x=ES")
            .addBlankField()
            message.channel.send({embed});
        }
});

// LOGIN TOKEN

bot.login('NjExNjQ1Nzk3Nzk2MTUxMjk3.XVW4YA.kJsPCIaq847IMxXb52QVnkUTREE')
