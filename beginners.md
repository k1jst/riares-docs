# Getting Started with FM and Repeaters

#### K1JST Jeremy, December 19, 2024

For those who have never checked into a repeater net before, here is a brief overview of the process. Setting up your station for repeater contacts is also beneficial for making simplex contacts on FM, so the information is good all around. I am by no means an expert, but I've read a lot of articles, done a lot of experimenting, and basically spent a few years playing and this information is based on my experience. It may not all be perfect, and your milage may vary. So, with the disclaimers out of the way...

### First Steps - Check your Radio

First, make sure you have your radio programmed properly and can open the repeater. If you make a brief transmission when no one is using it with just your call sign you should hear the repeater courtesy tone and tail after you release the PTT button. Even if you can open the repeater, you still aren't sure anyone can actually hear you... so the next thing to do is ask for a radio check. A good time to do this is right after you've heard some people finish a QSO, or a few minutes before the net starts. Just "CALLSIGN looking for a radio check" should get you a response. Other good times to try are during drive times or during the day on a weekday when there usually a few people who listen all day (myself included, but I'm usually distracted with work).

Keep in mind, NB1RI is linked to about 14 repeaters and it takes a second or two for your PTT to propagate, so if you don't leave a little extra time between when you key up and when you start speaking your first word or two can easily get cut off. Also, it's good etiquette to leave a few seconds of silence between transmissions in case someone else wants to throw their call sign out and join the conversation.

### A Little Detour on Rigs and Antennas

If you aren't able to get a response, you might need to look at your radio and antenna situation. Low cost HTs are both the best and worst thing ever to happen in Amateur Radio. The low cost to entry makes the hobby easily accessible and opens a world of opportunity to explore, but the usefulness of a HT depends greatly on your position relative to where you wish to communicate. HTs do not have the power or atenna system necessary to diffract or reflect signals over and around obstructions beyond 1-2 miles at most. HTs work best outside and can have very spotty coverage, with only a few steps making a huge difference. You really need near line of sight to the repeater's antenna to get in with a portable. HTs can be a huge turnoff for the new ham who can't actually communicate with anyone either due to difficulty programming or the limitations of their HT.

I always recommend a mobile rig as your first radio, either in the car or at home with a power supply. You can usually find a 2 meter FM or Dual Band 2m/70cm rig pretty cheap on [RI Swap and Sell Net](https://riswap.net) or [QTH.com](https://swap.qth.com/) ($100-$150 for 2m, $150-250 for dual band is reasonable), but if you can't find one you can afford let me know as I usually have a few around I can loan out or sell at a reasonable price. I do recommend getting a rig capable of outputting 50 watts from one of the big 3 (Kenwood, Icom or Yeasu), or at least a manufacturer that makes rigs designed for amatueurs with simple front panel programming and a VFO (Alinco, Wouxun, Powerworx, some TYT models), anthough commercial rigs can work if you are wlling to put in the effort to program them. A 30 amp 13.8V DC power supplies can be had on the cheap ($20 or so), but you will need to add your own fuses and power lead. Commerical 13.8V power supplies are a bit more money (starting around $80), but less hassle. When buying equipment, keep in mind the age (30 year old capacitors like to leak) and definitely look around for reviews at sites like [eHam.net](https://www.eham.net/reviews/index).

I also recommend putting up an antenna outside. A rope over a tree or two 10ft chain link fence top rails (abour $20 each at your local home improvement store) strapped to a deck or fence post with ratchet straps work great to support an antenna. Homebrew antennas like a J-pole or a quarter wave groundplane work well when you're first starting out.

You can also consider commercial options like the Tram 1477, Diamond X30, or Comet GP-1. I won't recommend a brand, they all work reasonably well and have their pros and cons. These commercial options are all 2 element collinear antennas with an omnidirectional horizontal pattern. If you have a little more to spend, you might consider a collinear with more elements (longer with higher gain figures), just keep in mind that more elements menas more gain but a flatter vertical radiation pattern. If you are trying to get into repeaters that are at a significant elevation difference from you, having a higher gain antenna isn't always going to give you a better signal. I have included radiation pattern diagrams for several Diamond antennas (they publish the radation patterns, not necessarily an advertisement for Diamond) below so you can see the difference.

#### Antenna patterns of different colinear antennas

![Diamond Antenna Patterns](https://k1jst.github.io/riares-docs/diamond_ant-patterns.png)

| Model       | X30A     | X50A     | X200A    | X510HD   |
| ----------- | -------- | -------- | -------- | -------- |
| Elements    | 2 x 1/4λ | 3 x 1/4λ | 2 x 5/8λ | 3 x 5/8λ |
| Gain (dBd)  | .85      | 2.35     | 3.85     | 6.15     |
| Length (ft) | 4.5      | 5.6      | 8.3      | 17.2     |

### More Antenna Options

[Yagi-Uda antenas](https://k1jst.github.io/riares-docs/nist_nbs-tn-688-yagi.pdf) can also be useful, but keep in mind that repeaters are almost always vertically polarized and Yagis are directional, so you might want the ability to repoint them. Being 90° out on polarity can cost you 20db of signal, so it's definitely something to keep in mind. There are other stealthy antenna options if you rent, have a spouse who cares about asthetics, or have a nosy HOA... a roll up jpole or a magmout antenna on a window AC or in the attic on a large pizza pan can work pretty well.

### Important information about outdoor antennas

If you go with an outdoor antenna, you're going to need to be well away from your electrical service entrance if it's not underground because you want a near zero chance of your antenna and your electrical service wires touching no matter the circumstances. You'll need a piece of coax long enough to get to your entry point (LMR-400 equivalent coax works well for VHF/UHF, though RG-8X is okay if the run is short), a **lightning arrestor**, and another piece of coax long enough to get into the house and to your radio. If you don't want to drill a hole, a short length of RG-174 or RG-316 with an sma connector will usually make it through the gap between the two panes of your windows and then you can adapt to SO-239 on both ends. Other ideas include two pool noodles with a slit cut lengthwise to fit over the bottom of the window and the sash creating a barrier that will mould around your cables.  Grounding your antenna is important, and if you are unable to ground the antenna properly then you will want a temporary setup where the coax lives outside your house whenever you aren't using it. For proper grounding of antennas see Mike Holt's Free PDF on [NEC Article 810](https://k1jst.github.io/riares-docs/mikeholt_NEC-810.21.pdf) and check out this [Video](https://youtu.be/WRv8AKVAfyc). But I digress.

### Checking in to the Net

After you know you can get into the repeater, listen to the net control and follow their instructions. At the appropriate time, key up and say "this is" and then unkey your mic and listen. If you hear anyone else, let them go first and try again when they're done. If you hear no one, key back up and say "This is (Your Callsign Phonetically, i.e. Kilo One Juliet Sierra Tango, Your Name in Your Town." Net control should recognize you and may call you back for comments or information later in the net. If you're nervous or can't stick around, just add "in and out" to your check-in.

Hope to hear you on the next net. The Swap and Sell net on Saturday Morning at 9:00 is a good first net as they really just want to see who's listening and don't want comments or anything.

You can see a list of repeaters at NB1RI.net

If you have any questions feel free to text or call me. My number is in my signature on all my email commnications.

73,

K1JST Jeremy
