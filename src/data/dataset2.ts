import { IDataset } from "../models/Dataset";

export const dataset2: IDataset = {
	name: "Rozhodčí stupne E",
	questions: [
		{
			title: "Krvácející hráč:",
			options: [
				{
					title: "Se nesmí účastnit utkání, dokud krvácení není pod kontrolou.",
					isRight: true,
				},
				{
					title: "Se může účastnit utkání bez omezení.",
					isRight: false,
				},
				{
					title: "Se nesmí účastnit utkání, dokud krvácení není zcela zastaveno.",
					isRight: false,
				},
				{
					title: "Musí odejít do šaten a nesmí se utkání dále účastnit.",
					isRight: false,
				},
			],
		},

		{
			title: "Přijme-li hráč přihrávku nohou od spoluhráče v poli:",
			options: [
				{ title: "Rozhodčí nechá pokračovat ve hře.", isRight: true },
				{
					title: "Rozhodčí nařídí volný úder z místa, kde hráč přijal přihrávku.",
					isRight: false,
				},
				{
					title: "Rozhodčí nařídí volný úder z místa, odkud bylo hráči nahráno.",
					isRight: false,
				},
				{
					title: "Rozhodčí nechá pokračovat ve hře, pokud se nejednalo o úmyslnou přihrávku.",
					isRight: false,
				},
			],
		},

		{
			title: "Hráč je v ponechané výhodě zastaven dalším přestupkem na volný úder podobného charakteru:",
			options: [
				{
					title: "Rozhodčí nařídí volný úder za druhý přestupek.",
					isRight: true,
				},
				{
					title: "Rozhodčí udělí druhému faulujícímu hráči 2 minutový trest za opakované přestupky.",
					isRight: false,
				},
				{ title: "Rozhodčí nechá pokračovat ve hře.", isRight: false },
				{
					title: "Rozhodčí vrátí výhodu na místo původního přestupku.",
					isRight: false,
				},
			],
		},

		{
			title: "Komu přísluší rozhodnutí o způsobilosti hrací plochy?",
			options: [
				{ title: "Rozhodčím utkání.", isRight: true },
				{ title: "Rozhodčím a delegátovi utkání.", isRight: false },
				{ title: "Delegátovi utkání.", isRight: false },
				{
					title: "Rozhodčím, delegátovi a hlavnímu pořadateli utkání.",
					isRight: false,
				},
			],
		},

		{
			title: "Míček přejde brankovou čáru během signálu oznamujícího konec třetiny. Rozhodčí:",
			options: [
				{ title: "Branku neuzná.", isRight: true },
				{ title: "Branku uzná.", isRight: false },
				{
					title: "Branku neuzná a nařídí trestné střílení.",
					isRight: false,
				},
				{
					title: "Branku uzná po poradě s hlavním pořadatelem.",
					isRight: false,
				},
			],
		},

		{
			title: "Hráč v poli kopne míč úmyslně do soupeřovy brány. Rozhodčí:",
			options: [
				{ title: "Branku neuzná a nařídí vhazování.", isRight: true },
				{ title: "Branku uzná.", isRight: false },
				{
					title: "Branku neuzná a nařídí volný úder z velkého brankoviště.",
					isRight: false,
				},
				{
					title: "Branku neuzná a udělí hráči dvouminutový trest.",
					isRight: false,
				},
			],
		},

		{
			title: "Hráč vstřelí gól, ale při došvihu trefí soupeře holí do hlavy. Rozhodčí:",
			options: [
				{
					title: "Branku neuzná a udělí hráči pětiminutový trest.",
					isRight: true,
				},
				{ title: "Branku uzná.", isRight: false },
				{
					title: "Branku neuzná a udělí hráči dvouminutový trest.",
					isRight: false,
				},
				{ title: "Branku neuzná a nařídí volný úder.", isRight: false },
			],
		},

		{
			title: "Branka v základní hrací době je považována za uznanou, jestliže byla vstřelena správným způsobem a potvrzena:",
			options: [
				{ title: "Vhazováním na středovém bodě.", isRight: true },
				{ title: "Zapsáním do zápisu o utkání.", isRight: false },
				{ title: "Odsouhlasením kapitány družstev.", isRight: false },
				{ title: "Vhazováním v rohu hřiště.", isRight: false },
			],
		},

		{
			title: "Komu bude připsána vlastní branka?",
			options: [
				{
					title: "Hráči, který ji vstřelil a označena v zápise o utkání kódem „V“.",
					isRight: true,
				},
				{ title: "Nikomu - nebude uznána.", isRight: false },
				{
					title: "Poslednímu útočícímu hráči, který se dotkl míče.",
					isRight: false,
				},
				{
					title: "Poslednímu útočícímu hráči, který se dotkl míče a v zápise o utkání označena kódem „V“.",
					isRight: false,
				},
			],
		},

		{
			title: "Hráč bránícího družstva posunul bránu mimo její místo a míč překročil brankovou zepředu mezi značkami umístění brány a pod pomyslným břevnem. Rozhodčí:",
			options: [
				{ title: "Uzná branku.", isRight: true },
				{ title: "Nařídí vhazování v rohu hřiště.", isRight: false },
				{ title: "Nařídí trestné střílení.", isRight: false },
				{
					title: "Nařídí volný úder z velkého brankoviště.",
					isRight: false,
				},
			],
		},

		{
			title: "Míč přešel celým objemem brankovou čáru poté, co ho neúmyslně usměrnil svým tělem hráč útočícího družstva. Rozhodčí:",
			options: [
				{ title: "Uzná branku.", isRight: true },
				{
					title: "Nařídí volný úder z velkého brankoviště.",
					isRight: false,
				},
				{ title: "Nařídí trestné střílení.", isRight: false },
				{ title: "Neuzná branku.", isRight: false },
			],
		},

		{
			title: "Hráč nebo člen realizačního týmu vyloučený do konce utkání musí:",
			options: [
				{
					title: "Okamžitě odejít do šaten a nesmí se dále žádným způsobem podílet na utkání.",
					isRight: true,
				},
				{
					title: "O nejbližší přestávce opustit střídačku.",
					isRight: false,
				},
				{
					title: "Strávit celý zbytek utkání v hledišti.",
					isRight: false,
				},
				{
					title: "Odsloužit pětiminutový trest na trestné lavici a poté odejít do šaten.",
					isRight: false,
				},
			],
		},

		{
			title: "Vyloučení do konce utkání 1:",
			options: [
				{
					title: "Vede k postihu pro zbytek utkání a nemá žádné další následky.",
					isRight: true,
				},
				{
					title: "Vede k nemožnosti účastnit se následujícího utkání stejné soutěže.",
					isRight: false,
				},
				{
					title: "Vede k nemožnosti účastnit se nejbližšího následujícího utkání bez ohledu na soutěž.",
					isRight: false,
				},
				{
					title: "Vede k nemožnosti účastnit se dalšího utkání stejné soutěže a dále k potrestání, které určí disciplinární orgán.",
					isRight: false,
				},
			],
		},

		{
			title: "Vyloučení do konce utkání 3:",
			options: [
				{
					title: "Vede k nemožnosti účastnit se dalších utkání do projednání přestupku disciplinárním orgánem a dále k potrestání, které určí disciplinární orgán.",
					isRight: true,
				},
				{
					title: "Vede k nemožnosti účastnit se následujícího utkání, v jiné soutěži hráč může startovat.",
					isRight: false,
				},
				{
					title: "Umožňuje hráči až do rozhodnutí DK nastupovat k utkáním.",
					isRight: false,
				},
				{
					title: "Vede k nemožnosti účastnit se utkání stejné soutěže do konce sezóny.",
					isRight: false,
				},
			],
		},

		{
			title: "Balón poskakuje ve velkém brankovišti. Brankář domácích kopne do balónu přímo do běhu spoluhráči a ten balón na vlastní polovině hřiště zpracuje. Co bude následovat?",
			options: [
				{ title: "Hra bude pokračovat.", isRight: true },
				{
					title: "Volný úder pro hostující družstvo 3,5m od malého brankoviště.",
					isRight: false,
				},
				{
					title: "Volný úder pro hostující družstvo na místě přijetí přihrávky.",
					isRight: false,
				},
				{
					title: "Vhazování na nejbližším bodě pro vhazování.",
					isRight: false,
				},
			],
		},

		{
			title: "Pokud brankář při výhozu zcela opustí velké brankoviště:",
			options: [
				{ title: "Bude nařízen volný úder.", isRight: true },
				{ title: "Hra bude pokračovat.", isRight: false },
				{
					title: "Bude udělen dvouminutový trest za hru na zemi.",
					isRight: false,
				},
				{
					title: "Bude udělen dvouminutový trest za hru rukou.",
					isRight: false,
				},
			],
		},

		{
			title: "Bránící hráč při snaze získat balón kopne do útočníkovy čepele. Rozhodčí:",
			options: [
				{ title: "Nařídí volný úder.", isRight: true },
				{
					title: "Slovně hráče upozorní a nechá hru pokračovat.",
					isRight: false,
				},
				{
					title: "Neudělá nic, situace to nevyžaduje.",
					isRight: false,
				},
				{
					title: "Zapíská trojitý hvizd a zkontroluje, zda se bránící hráč nezranil.",
					isRight: false,
				},
			],
		},

		{
			title: "Hráč provádějící volný úder:",
			options: [
				{
					title: "Se nesmí dotknout míče podruhé, dokud se míče nedotkne jiný hráč nebo výstroj jiného hráče.",
					isRight: true,
				},
				{ title: "Může rozehrát nohou.", isRight: false },
				{
					title: "Musí při rozehrání držet hůl oběma rukama",
					isRight: false,
				},
				{
					title: "Musí upozornit soupeře, aby dodržel vzdálenost 3 metry od místa rozehrání.",
					isRight: false,
				},
			],
		},

		{
			title: "Vyloučený hráč smí opustit trestnou lavici:",
			options: [
				{
					title: "Během přestávky v normální hrací době.",
					isRight: true,
				},
				{ title: "Během time-outu.", isRight: false },
				{
					title: "Během přestávky mezi normální hrací dobou a prodloužením.",
					isRight: false,
				},
				{
					title: "Během přestávky v normální hrací době i během přestávky mezi normální hrací dobou a prodloužením.",
					isRight: false,
				},
			],
		},

		{
			title: "Pokud je za předčasné vpuštění trestaného hráče na hřiště zodpovědný zapisovatelský stolek:",
			options: [
				{
					title: "Vrátí se hráč na trestnou lavici a žádné další tresty nebudou uděleny.",
					isRight: true,
				},
				{ title: "Hráč nastoupí ihned zpět do hry.", isRight: false },
				{ title: "Hráč bude vyškrtnut ze zápisu.", isRight: false },
				{
					title: "Hráč se vrátí do hry a pořádajícímu oddílu bude následně udělena pokuta.",
					isRight: false,
				},
			],
		},

		{
			title: "V jakém pořadí opouštějí trestnou lavici potrestaní hráči?",
			options: [
				{
					title: "V pořadí, v jakém uplynuly jejich tresty.",
					isRight: true,
				},
				{ title: "V pořadí, které určí rozhodčí.", isRight: false },
				{
					title: "V pořadí, v jakém jim byly uloženy jejich tresty.",
					isRight: false,
				},
				{
					title: "V pořadí dle rozhodnutí stolku zapisovatelů.",
					isRight: false,
				},
			],
		},

		{
			title: "Má družstvo mající více jak dva vyloučené hráče na trestné lavici právo hrát stále se čtyřmi hráči na hrací ploše?",
			options: [
				{ title: "Ano.", isRight: true },
				{ title: "Ne.", isRight: false },
				{
					title: "Ano, pokud žádné z vyloučení nebylo do konce utkání.",
					isRight: false,
				},
				{
					title: "Ne, pakliže rozhodčí nerozhodnou jinak.",
					isRight: false,
				},
			],
		},

		{
			title: "Kolik trestů lze maximálně udělit jednomu hráči?",
			options: [
				{ title: "Neomezené množství.", isRight: true },
				{ title: "Dva.", isRight: false },
				{ title: "Tři.", isRight: false },
				{
					title: "Tři, pokud je jedním z nich osobní trest.",
					isRight: false,
				},
			],
		},

		{
			title: "Je-li hráč potrestán osobním trestem, kdy se tento trest začne měřit?",
			options: [
				{
					title: "Poté, co uplynou nebo jsou zrušena všechna jeho vyloučení na trestnou lavici.",
					isRight: true,
				},
				{ title: "Na pokyn rozhodčího.", isRight: false },
				{ title: "Kdykoliv.", isRight: false },
				{ title: "Vždy ihned po udělení trestu.", isRight: false },
			],
		},

		{
			title: "Padne-li branka během dvouminutového trestu:",
			options: [
				{
					title: "Trest se ruší, pokud branku vstřelilo družstvo, které nebylo trestáno.",
					isRight: true,
				},
				{
					title: "Trest se ruší, pokud branku vstřelilo družstvo, které nebylo trestáno, nebo pokud týmy hrály ve stejném počtu hráčů na hřišti.",
					isRight: false,
				},
				{
					title: "Trest pokračuje, i pokud branku vstřelilo družstvo, které nebylo trestáno a trestané družstvo nadále hraje s méně hráči v poli.",
					isRight: false,
				},
				{
					title: "Trest pro hráče pokračuje, ale trestané družstvo bude hrát v plném počtu hráčů.",
					isRight: false,
				},
			],
		},

		{
			title: "Během odloženého vyloučení je neproviněným družstvem vstřelena branka:",
			options: [
				{
					title: "Odložené vyloučení se ruší a všechny udělené probíhající tresty budou pokračovat.",
					isRight: true,
				},
				{
					title: "Odložené vyloučení je uděleno a je zrušen trest, ze kterého zbývá nejkratší čas.",
					isRight: false,
				},
				{
					title: "Trest se neruší v případě, že byl neproviněnému mužstvu v té chvíli měřen právě jeden trest.",
					isRight: false,
				},
				{
					title: "Odložené vyloučení je uděleno a zrušen je předchozí udělený dvouminutový trest.",
					isRight: false,
				},
			],
		},

		{
			title: "Je-li hra přerušena a je-li uloženo odložené vyloučení:",
			options: [
				{
					title: "Bude hra pokračovat dle důvodu přerušení.",
					isRight: true,
				},
				{
					title: "Bude hra pokračovat dle přestupku vedoucího k vyloučení.",
					isRight: false,
				},
				{
					title: "Bude hra vždy pokračovat vhazováním.",
					isRight: false,
				},
				{
					title: "Družstvo, které není trestáno, bude rozehrávat volný úder z místa, kde došlo k přerušení hry.",
					isRight: false,
				},
			],
		},

		{
			title: "Pokud je hra přerušena, pokračuje se vždy:",
			options: [
				{ title: "Podle příčiny přerušení.", isRight: true },
				{ title: "Vhazováním.", isRight: false },
				{ title: "Rozehráním.", isRight: false },
				{ title: "Volným úderem.", isRight: false },
			],
		},

		{
			title: "Všemi standardními situacemi ve florbale jsou:",
			options: [
				{
					title: "Vhazování, volný úder, rozehrání a trestné střílení.",
					isRight: true,
				},
				{ title: "Vhazování, volný úder a rozehrání.", isRight: false },
				{ title: "Volný úder a vhazování.", isRight: false },
				{ title: "Volný úder a rozehrání.", isRight: false },
			],
		},

		{
			title: "Bezdůvodné zdržování standardní situace:",
			options: [
				{ title: "Je na posouzení rozhodčích.", isRight: true },
				{
					title: "Je vymezeno taxativně v pravidlech florbalu.",
					isRight: false,
				},
				{
					title: "Není v pravidlech florbalu vůbec zmiňováno.",
					isRight: false,
				},
				{
					title: "Je situace, pokud družstvo do tří vteřin nepokračuje ve hře.",
					isRight: false,
				},
			],
		},

		{
			title: "Vhazování se provádí:",
			options: [
				{
					title: "Na nejbližším bodě pro vhazování, dle polohy míče při přerušení.",
					isRight: true,
				},
				{
					title: "Na nejvzdálenějším bodě pro vhazování, dle polohy míče při přerušení.",
					isRight: false,
				},
				{
					title: "Na útočné polovině družstva, pokud druhé družstvo bylo potrestáno vyloučením.",
					isRight: false,
				},
				{ title: "Vždy na středovém bodě.", isRight: false },
			],
		},

		{
			title: "Pokud je hra přerušena, pokračuje se vhazováním:",
			options: [
				{
					title: "Pokud nelze žádnému družstvu udělit rozehrání, volný úder nebo trestné střílení.",
					isRight: true,
				},
				{ title: "Ve všech případech.", isRight: false },
				{
					title: "Pouze pokud byl vstřelen regulérní gól.",
					isRight: false,
				},
				{
					title: "Pouze pokud byl udělen trest bez souvislosti se hrou.",
					isRight: false,
				},
			],
		},

		{
			title: "Při provádění vhazování musí ostatní hráči (mimo hráčů provádějící vhazování) být ve vzdálenosti:",
			options: [
				{
					title: "Minimálně 3m od míče včetně florbalky.",
					isRight: true,
				},
				{
					title: "Minimálně 3m od míče, florbalka může být blíže.",
					isRight: false,
				},
				{
					title: "Maximálně 5m od míče včetně florbalky.",
					isRight: false,
				},
				{
					title: "Minimálně 2m od míče včetně florbalky.",
					isRight: false,
				},
			],
		},

		{
			title: "Rozhodčí okamžitě přeruší hru vždy, pokud:",
			options: [
				{
					title: "Je podezření, že došlo k vážnému zranění hráče.",
					isRight: true,
				},
				{
					title: "Ke zranění hráče došlo na útočné polovině.",
					isRight: false,
				},
				{ title: "Zraněný hráč neovlivňuje hru.", isRight: false },
				{ title: "Je posunutá branka.", isRight: false },
			],
		},

		{
			title: "Během trestného střílení může být na hřišti:",
			options: [
				{
					title: "Brankář jednoho družstva a hráč druhého družstva, provádějící trestné střílení.",
					isRight: true,
				},
				{
					title: "Brankáři obou družstev a hráč provádějící trestné střílení.",
					isRight: false,
				},
				{
					title: "Tolik hráčů, kolik povolují pravidla florbalu při zahájení hry.",
					isRight: false,
				},
				{
					title: "Brankář jednoho družstva, hráč provádějící trestné střílení a hráč, který bude trestné střílení provádět jako následující.",
					isRight: false,
				},
			],
		},

		{
			title: "Při zahájení trestného střílení musí být brankář:",
			options: [
				{ title: "Na brankové čáře.", isRight: true },
				{ title: "1,5m před brankovou čárou.", isRight: false },
				{ title: "0,5m před brankovou čárou.", isRight: false },
				{ title: "V malém brankovišti.", isRight: false },
			],
		},

		{
			title: "Při trestném střílení míč zasáhne konstrukci brány, poté zasáhne brankáře a přejde zepředu brankovou čáru. Branka:",
			options: [
				{ title: "Bude uznána.", isRight: true },
				{
					title: "Nebude uznána, jelikož se míček již dotknul brankáře, tudíž trestné střílení bylo ukončeno.",
					isRight: false,
				},
				{
					title: "Bude uznána pouze v případě, že se hráč poté znovu dotkne míčku.",
					isRight: false,
				},
				{
					title: "Nebude uznána, protože míček se během trestného střílení nesmí zastavit ani vrátit zpět.",
					isRight: false,
				},
			],
		},

		{
			title: "Odložené trestné střílení bude nařízeno:",
			options: [
				{
					title: "Bezprostředně po skončení brankové situace.",
					isRight: true,
				},
				{
					title: "Pokud družstvo, které se provinilo, nebude mít míček pod kontrolou.",
					isRight: false,
				},
				{
					title: "Pokud jedno z družstev vstřelilo regulérní branku.",
					isRight: false,
				},
				{
					title: "Ihned, protože trestné střílení nelze za žádné situace odložit.",
					isRight: false,
				},
			],
		},

		{
			title: "Přestupky ve velkém brankovišti:",
			options: [
				{
					title: "Nevedou automaticky k nařízení trestného střílení.",
					isRight: true,
				},
				{
					title: "Vedou automaticky k nařízení trestného střílení.",
					isRight: false,
				},
				{
					title: "Vedou automaticky k nařízení trestného střílení, pokud brankář není v brance.",
					isRight: false,
				},
				{
					title: "Vedou k nařízení trestného střílení, pokud je přestupkem sekání.",
					isRight: false,
				},
			],
		},

		{
			title: "Vhazuje-li se na středovém bodě, kdo pokládá florbalku jako první?",
			options: [
				{ title: "Hostující hráč.", isRight: true },
				{ title: "Domácí hráč.", isRight: false },
				{ title: "Hráče určí rozhodčí.", isRight: false },
				{
					title: "Hráč z družstva, které obdrželo branku.",
					isRight: false,
				},
			],
		},

		{
			title: "Vhazuje-li se na bodě pro vhazování v rohu hřiště, kdo pokládá florbalku jako první?",
			options: [
				{ title: "Bránící hráč.", isRight: true },
				{ title: "Útočící hráč.", isRight: false },
				{ title: "Hráč z družstva, které prohrává.", isRight: false },
				{
					title: "Hráč z družstva, které hraje v oslabení.",
					isRight: false,
				},
			],
		},

		{
			title: "Je možno přímo z vhazování vstřelit branku?",
			options: [
				{ title: "Ano.", isRight: true },
				{ title: "Ne.", isRight: false },
				{ title: "Závisí na posouzení rozhodčího.", isRight: false },
				{ title: "Ano, ale pouze na útočné polovině.", isRight: false },
			],
		},

		{
			title: "Míč zasáhl rozhodčího, čímž byla značně ovlivněna hra. Co bude následovat?",
			options: [
				{
					title: "Vhazování na nejbližším bodě pro vhazování.",
					isRight: true,
				},
				{
					title: "Volný úder pro družstvo, které bylo jako poslední v držení míče.",
					isRight: false,
				},
				{ title: "Hra bude pokračovat.", isRight: false },
				{
					title: "Volný úder proti družstvu, které bylo jako poslední v držení míče.",
					isRight: false,
				},
			],
		},

		{
			title: "Míč opustí hřiště poté, co bránící hráč zasáhl florbalkou síťku u branky, aniž by se míče dotknul. Co bude následovat?",
			options: [
				{ title: "Rozehrání pro útočící družstvo.", isRight: true },
				{ title: "Rozehrání pro bránící družstvo.", isRight: false },
				{
					title: "Vhazování na nejbližším bodě pro vhazování.",
					isRight: false,
				},
				{ title: "Vhazování na středovém bodě.", isRight: false },
			],
		},

		{
			title: "Při rozehrání hráči bránícího družstva zaujmou postavení od míče alespoň:",
			options: [
				{ title: "3 m.", isRight: true },
				{ title: "3,5 m.", isRight: false },
				{ title: "2,5 m.", isRight: false },
				{ title: "2 m.", isRight: false },
			],
		},

		{
			title: "Rozhodčí udělí dvouminutový trest za vysokou hůl, pokud hráč v poli hraje míč jakoukoliv částí florbalky nad úrovní pasu:",
			options: [
				{ title: "Ve vlastním vzpřímeném postoji.", isRight: true },
				{ title: "V libovolném postoji.", isRight: false },
				{
					title: "Ve vzpřímeném postoji nejbližšího soupeře.",
					isRight: false,
				},
				{
					title: "Ve vlastním vzpřímeném postoji na útočné polovině, v libovolném postoji na obranné polovině.",
					isRight: false,
				},
			],
		},

		{
			title: "Nekontrolovaný nápřah, došvih nebo zvedání florbalky přes soupeřovu hlavu jsou potrestány dvouminutovým trestem:",
			options: [
				{
					title: "Je-li to považováno za nebezpečné či rušivé pro soupeře.",
					isRight: true,
				},
				{ title: "Vždy.", isRight: false },
				{
					title: "Pouze, je-li soupeř zasažen do hlavy.",
					isRight: false,
				},
				{
					title: "Nikdy. Vždy je udělen buď volný úder, nebo pětiminutový trest.",
					isRight: false,
				},
			],
		},

		{
			title: "Hráč vloží florbalku do střely soupeře, přičemž se florbalka zlomí a vyletí mu z ruky. Následně:",
			options: [
				{
					title: "Hráč, jehož florbalka odletěla, musí tuto florbalku ze hřiště sebrat a odnést do vlastního prostoru pro střídání, jinak mu bude uložen dvouminutový trest.",
					isRight: true,
				},
				{
					title: "Oba hráči mohou vystřídat bez zájmu o na hřišti ležící florbalku.",
					isRight: false,
				},
				{
					title: "Hráč, jehož florbalka odletěla, musí tuto florbalku sebrat a položit ji kdekoliv za mantinel, jinak mu bude uložen dvouminutový trest.",
					isRight: false,
				},
				{
					title: "Nejbližší hráč týmu, jehož hráči patřila florbalka a k němuž tato florbalka doletěla, má povinnost odklidit ji ze hřiště.",
					isRight: false,
				},
			],
		},

		{
			title: "Pokud hráč úmyslně blokuje míč proti mantinelu nebo bráně a nebo úmyslně zničí míč, rozhodčí:",
			options: [
				{
					title: "Udělí tomuto hráči dvouminutový trest za zdržování hry.",
					isRight: true,
				},
				{
					title: "Nařídí proti družstvu tohoto hráče volný úder.",
					isRight: false,
				},
				{
					title: "Udělí tomuto hráči ČK 2 za nesportovní chování (sabotáž hry).",
					isRight: false,
				},
				{
					title: "Udělí tomuto hráči dvouminutový trest za nesportovní chování.",
					isRight: false,
				},
			],
		},

		{
			title: "Vyloučení na 2 minuty je uděleno, hraje-li nebo zastavuje-li hráč míč:",
			options: [
				{ title: "Vsedě.", isRight: true },
				{ title: "Stehnem.", isRight: false },
				{ title: "Ve výskoku.", isRight: false },
				{ title: "Holí nad úrovní kolen.", isRight: false },
			],
		},

		{
			title: "Odpálí-li hráč provinivšího se družstva v přerušené hře míček:",
			options: [
				{
					title: "Bude potrestán vyloučením na 2 minuty.",
					isRight: true,
				},
				{ title: "Bude napomenut.", isRight: false },
				{
					title: "Bude potrestán vyloučením na 2 + 10 minut.",
					isRight: false,
				},
				{
					title: "Bude potrestán, přičemž výši trestu posoudí rozhodčí podle možnosti rychlé rozehrávky neprovinivšího se družstva.",
					isRight: false,
				},
			],
		},

		{
			title: "K dvouminutovému trestu nevede:",
			options: [
				{
					title: "Úmyslné posunutí soupeřovy brány hráčem v poli.",
					isRight: true,
				},
				{
					title: "Účast ve hře hráče v poli bez florbalky.",
					isRight: false,
				},
				{
					title: "Opomenutí hráče v poli sebrat si zlomenou florbalku ze hřiště.",
					isRight: false,
				},
				{
					title: "Vyzvednutí si florbalky pro hru v poli z jiného místa než z vlastního prostoru pro střídání.",
					isRight: false,
				},
			],
		},

		{
			title: "Pokud hráč podrazí protihráče uprostřed hřiště:",
			options: [
				{
					title: "Bude hráči udělen trest vyloučení na 2 minuty.",
					isRight: true,
				},
				{
					title: "Bude situace posouzena jako přestupek bez vyloučení.",
					isRight: false,
				},
				{
					title: "Nic se neděje, pravidla na tuto situaci nepamatují.",
					isRight: false,
				},
				{
					title: "Jedná se o hrubost, hráči bude vždy udělen trest vyloučení na 5 minut.",
					isRight: false,
				},
			],
		},

		{
			title: "Co musí mít hráči v poli (dle pravidel) na sobě oblečené?",
			options: [
				{
					title: "Dresy skládající se z trika, trenýrek a štulpen.",
					isRight: true,
				},
				{
					title: "Zcela stejné dresy skládající se z trika a trenýrek.",
					isRight: false,
				},
				{
					title: "Dresy jakékoliv barevné kombinace kromě šedé a černé.",
					isRight: false,
				},
				{
					title: "Potítko, čelenku a nejnovější trendy oblečení.",
					isRight: false,
				},
			],
		},

		{
			title: "Co musí mít rozhodčí (dle pravidel) při utkání na sobě?",
			options: [
				{
					title: "Triko, černé trenýrky a černé štulpny.",
					isRight: true,
				},
				{
					title: "Triko s dlouhým rukávem, trenýrky a štulpny.",
					isRight: false,
				},
				{
					title: "Triko, trenýrky a štulpny odlišné barevné kombinace, než mají družstva.",
					isRight: false,
				},
				{
					title: "Triko a trenýrky stejné barevné kombinace.",
					isRight: false,
				},
			],
		},

		{
			title: "Pokud hráč během hry ztratí jednu nebo obě boty:",
			options: [
				{
					title: "Může pokračovat ve hře do následujícího přerušení.",
					isRight: true,
				},
				{ title: "Musí jít neprodleně vystřídat.", isRight: false },
				{
					title: "Může pokračovat libovolně, ale musí botu sebrat a hodit za mantinel.",
					isRight: false,
				},
				{
					title: "Musí být potrestán osobním trestem 2+10 min.",
					isRight: false,
				},
			],
		},

		{
			title: "Kdy může brankář používat florbalku?",
			options: [
				{ title: "Nikdy.", isRight: true },
				{ title: "Při power play.", isRight: false },
				{ title: "Při útoku na soupeře.", isRight: false },
				{ title: "Při trestném střílení.", isRight: false },
			],
		},

		{
			title: "Co musí mít na sobě brankář?",
			options: [
				{
					title: "Obličejovou masku odpovídající pravidlům, dlouhé kalhoty, triko a sportovní obuv.",
					isRight: true,
				},
				{
					title: "Obličejovou masku odpovídající pravidlům, dlouhé kalhoty a triko s dlouhým rukávem.",
					isRight: false,
				},
				{
					title: "Obličejovou masku, trenýrky, triko a stulpny.",
					isRight: false,
				},
				{
					title: "Chrániče na kolena, sportovní obuv, dres a kalhoty.",
					isRight: false,
				},
			],
		},

		{
			title: "Jaké ochranné vybavení smí brankář používat?",
			options: [
				{
					title: "Jakékoliv, které není určeno k chytání střel.",
					isRight: true,
				},
				{
					title: "Helmu, suspenzor, hokejovou vestu s ramenními vycpávkami a rukavice.",
					isRight: false,
				},
				{
					title: "Helmu, betony, lapačku a vyrážečku.",
					isRight: false,
				},
				{
					title: "Chrániče na kolena a ramenní vycpávky.",
					isRight: false,
				},
			],
		},

		{
			title: "Co nesmí mít na sobě hráč?",
			options: [
				{
					title: "Osobní vybavení, které může způsobit zranění.",
					isRight: true,
				},
				{ title: "Čelenku bez uzlů.", isRight: false },
				{
					title: "Ortopedické pomůcky všech druhů a velikostí.",
					isRight: false,
				},
				{ title: "Příliš krátké trenky.", isRight: false },
			],
		},

		{
			title: "Kolik může být maximální zahnutí čepele v nejvyšším bodě?",
			options: [
				{ title: "30 mm.", isRight: true },
				{ title: "25 mm.", isRight: false },
				{ title: "35 mm.", isRight: false },
				{ title: "Může být libovolné.", isRight: false },
			],
		},

		{
			title: "Čím musí být vybaven rozhodčí?",
			options: [
				{
					title: "Plastickou píšťalkou, měřícím vybavením a červenou kartou.",
					isRight: true,
				},
				{
					title: "Píšťalkou, červenou kartou a pravidly florbalu.",
					isRight: false,
				},
				{
					title: "Plastickou píšťalkou, stopkami a červenou kartou.",
					isRight: false,
				},
				{
					title: "Píšťalkou, měřícím vybavením, vybavením na měření času a červenou kartou.",
					isRight: false,
				},
			],
		},

		{
			title: "Kdo provádí kontrolu a přeměřování veškeré výstroje?",
			options: [
				{ title: "Rozhodčí.", isRight: true },
				{ title: "Kapitáni obou družstev.", isRight: false },
				{
					title: "Trenér nebo kapitán družstva, které na nesprávné vybavení upozornilo.",
					isRight: false,
				},
				{
					title: "Rozhodčí ve spolupráci s hlavním pořadatelem a kapitány.",
					isRight: false,
				},
			],
		},

		{
			title: "Kdo může požádat o přeměření čepele nebo kontrolu kombinace hole s čepelí?",
			options: [
				{ title: "Kapitán.", isRight: true },
				{ title: "Trenér.", isRight: false },
				{ title: "Vedoucí družstva.", isRight: false },
				{ title: "Hlavní pořadatel.", isRight: false },
			],
		},

		{
			title: "Maximálně kolik hráčů z jednoho družstva se může účastnit jednoho utkání?",
			options: [
				{ title: "20.", isRight: true },
				{ title: "15.", isRight: false },
				{
					title: "20 (standardně); 25 (v případě, že se hraje na zjednodušený ZOU).",
					isRight: false,
				},
				{ title: "Počet není omezen.", isRight: false },
			],
		},

		{
			title: "Brankář ve velkém brankovišti chytí balón ve výskoku. Rozhodčí:",
			options: [
				{ title: "Nechá pokračovat ve hře.", isRight: true },
				{ title: "Nařídí volný úder za výskok.", isRight: false },
				{
					title: "Nařídí trestné střílení, jelikož se jedná o přerušení brankové situace.",
					isRight: false,
				},
				{
					title: "Brankáře vyloučí na 2 minuty za hru rukou mimo malé brankoviště.",
					isRight: false,
				},
			],
		},

		{
			title: "Velké brankoviště má rozměry:",
			options: [
				{ title: "4 m × 5 m.", isRight: true },
				{ title: "4 m × 6 m.", isRight: false },
				{ title: "3 m × 6 m.", isRight: false },
				{ title: "3 m × 5 m.", isRight: false },
			],
		},

		{
			title: "Malé brankoviště má rozměry:",
			options: [
				{ title: "1,0 m × 2,5 m.", isRight: true },
				{ title: "2,0 m × 2,5 m.", isRight: false },
				{ title: "1,0 m × 2,0 m.", isRight: false },
				{ title: "2,0 m × 2,5 m.", isRight: false },
			],
		},

		{
			title: "Zadní čára malého brankoviště slouží také jako branková čára. Značky pro umístění branek musí být vyznačeny na zadní čáře malého brankoviště tak, aby vzdálenost mezi těmito body byla:",
			options: [
				{ title: "1,6 m.", isRight: true },
				{ title: "1,2 m.", isRight: false },
				{ title: "1,4 m.", isRight: false },
				{ title: "1,8 m.", isRight: false },
			],
		},

		{
			title: "Za nápravu nedostatků zjištěných při kontrole hrací plochy a její udržování v řádném stavu během utkání jsou zodpovědní:",
			options: [
				{ title: "Pořadatelé.", isRight: true },
				{ title: "Rozhodčí.", isRight: false },
				{ title: "Hráči domácího týmu.", isRight: false },
				{ title: "Zaměstnanci haly.", isRight: false },
			],
		},

		{
			title: "Před začátkem utkání vybírá stranu (kdo kde začne):",
			options: [
				{ title: "Domácí družstvo.", isRight: true },
				{ title: "Hostující družstvo.", isRight: false },
				{ title: "Rozhodčí.", isRight: false },
				{ title: "Hlavní pořadatel.", isRight: false },
			],
		},

		{
			title: "Time-out může být vyžádán:",
			options: [
				{
					title: "Pouze kapitánem družstva nebo členem realizačního týmu.",
					isRight: true,
				},
				{
					title: "Pouze kapitánem družstva nebo hlavním trenérem.",
					isRight: false,
				},
				{ title: "Pouze členem realizačního týmu.", isRight: false },
				{ title: "Pouze kapitánem družstva.", isRight: false },
			],
		},

		{
			title: "Vyžádaný time-out musí být vždy zahájen:",
			options: [
				{
					title: "Pouze pokud družstvo vstřelí branku, může vzít svou žádost o time-out zpět.",
					isRight: true,
				},
				{ title: "Bez výjimek.", isRight: false },
				{
					title: "Pouze pokud družstvo dostane branku, může vzít svou žádost o time-out zpět.",
					isRight: false,
				},
				{
					title: "Pouze pokud je pro družstvo nařízeno trestné střílení, může vzít svou žádost o time-out zpět.",
					isRight: false,
				},
			],
		},

		{
			title: "Body pro vhazování jsou vzdálené od delších stran hřiště:",
			options: [
				{ title: "1,5 m.", isRight: true },
				{ title: "2 m", isRight: false },
				{ title: "0,5 m.", isRight: false },
				{ title: "1 m.", isRight: false },
			],
		},

		{
			title: "Na kolik time-outů má družstvo nárok?",
			options: [
				{
					title: "Na jeden během celého utkání (včetně prodloužení).",
					isRight: true,
				},
				{ title: "Dle potřeby.", isRight: false },
				{
					title: "V každé třetině a v prodloužení má družstvo nárok na jeden time-out.",
					isRight: false,
				},
				{ title: "Družstvo nemá nárok na time-out.", isRight: false },
			],
		},

		{
			title: "Pokud se během utkání pokazí časomíra:",
			options: [
				{
					title: "Zbytek utkání se dohraje na stopky a rozhodčí tuto skutečnost zaznamená do zápisu o utkání.",
					isRight: true,
				},
				{
					title: "Zápas se přeruší až do opravy časomíry, případně se dohraje v jiném termínu.",
					isRight: false,
				},
				{
					title: "Zápas se ukončí a jako konečný výsledek zápasu se zapíše aktuální stav.",
					isRight: false,
				},
				{
					title: "Rozhodčí nechá zápas dohrát a zbylý čas odhadne.",
					isRight: false,
				},
			],
		},

		{
			title: "Během trestného střílení:",
			options: [
				{ title: "Je čas zastaven.", isRight: true },
				{ title: "Čas běží.", isRight: false },
				{
					title: "Čas stojí, ale přičte se deset vteřin.",
					isRight: false,
				},
				{
					title: "Čas běží, zastavuje se pouze tehdy, pokud se jedná o trestné střílení v prodloužení.",
					isRight: false,
				},
			],
		},

		{
			title: "Dojde-li k rozpojení mantinelů:",
			options: [
				{
					title: "Hra může pokračovat, dokud se míček nedostane do blízkosti tohoto místa.",
					isRight: true,
				},
				{
					title: "Hra se okamžitě přeruší a po nápravě pokračuje vhazováním.",
					isRight: false,
				},
				{
					title: "Nebere se na toto vůbec ohled a hra pokračuje dále.",
					isRight: false,
				},
				{
					title: "Hra se okamžitě přeruší a po nápravě pokračuje rozehráním pro družstvo, které bylo právě u míčku.",
					isRight: false,
				},
			],
		},

		{
			title: "Účastní-li se hry hráč v poli bez florbalky, rozhodčí:",
			options: [
				{
					title: "Udělí hráči trest vyloučení na 2 minuty.",
					isRight: true,
				},
				{
					title: "Nechá hráče dojít si pro florbalku a pokračovat ve hře.",
					isRight: false,
				},
				{ title: "Udělí hráči ČK2 za sabotáž hry.", isRight: false },
				{
					title: "Nařídí volný úder pro družstvo, které se neprovinilo.",
					isRight: false,
				},
			],
		},

		{
			title: "Střídající hráč nepřekročil mantinel dříve, než nastoupivší nový hráč. Toto nastalo v situaci, kdy se u střídačky hrálo. Co bude následovat?",
			options: [
				{
					title: "Trest vyloučení na 2 minuty za špatné střídání.",
					isRight: true,
				},
				{ title: "Trest ČK2 za sabotáž hry.", isRight: false },
				{
					title: "Rozhodčí nechá pokračovat ve hře 5 na 5.",
					isRight: false,
				},
				{
					title: "Volný úder pro družstvo, které se neprovinilo.",
					isRight: false,
				},
			],
		},

		{
			title: "Hráč, jenž byl už dvakrát v utkání potrestán dvouminutovým trestem za vrážení, se provinil stejným přestupkem potřetí, co bude následovat?",
			options: [
				{ title: "Vyloučení na 2 minuty.", isRight: true },
				{ title: "Vyloučení na 5 minut.", isRight: false },
				{ title: "Vyloučení do konce utkání 1.", isRight: false },
				{ title: "Vyloučení na 2+10 minut.", isRight: false },
			],
		},

		{
			title: "Hráč z družstva A byl vyloučen na 5 minut, družstvo B v průběhu vyloučení vstřelí branku, co bude následovat?",
			options: [
				{
					title: "Hráč dále zůstává na trestné lavici, pětiminutový trest se neruší.",
					isRight: true,
				},
				{
					title: "Trest se mu zruší a vrací se do hry.",
					isRight: false,
				},
				{
					title: "Pokud nezbývá do konce trestu více než 2 minuty, změní se mu trest na dvouminutový.",
					isRight: false,
				},
				{
					title: "Družstvo A může tohoto hráče nahradit na hrací ploše, ale potrestaný hráč musí zůstat dále na trestné lavici.",
					isRight: false,
				},
			],
		},

		{
			title: "Hráč byl vyloučen na 2+10 minut za nesportovní chování, kdo odsedí dvouminutový trest?",
			options: [
				{ title: "Hráč, kterého vybere kapitán.", isRight: true },
				{
					title: "Celý trest si odsedí pouze vyloučený hráč.",
					isRight: false,
				},
				{ title: "Kapitán.", isRight: false },
				{
					title: "Rozhodčí si vybere podle svého uvážení.",
					isRight: false,
				},
			],
		},

		{
			title: "Pro útočící družstvo bylo nařízeno trestné střílení. Hráči provádějícímu trestné střílení se nepodařilo vstřelit branku. Jak bude pokračovat hra?",
			options: [
				{ title: "Vhazováním v rohu hřiště.", isRight: true },
				{
					title: "Volným úderem pro bránící družstvo v rohu hřiště.",
					isRight: false,
				},
				{
					title: "Volným úderem pro útočící družstvo v rohu hřiště.",
					isRight: false,
				},
				{ title: "Vhazováním na středovém bodu.", isRight: false },
			],
		},

		{
			title: "Útočící hráč rozehrávající volný úder se po rozehrání dotkl míčku podruhé dříve než některý z jeho spoluhráčů. Rozhodčí:",
			options: [
				{
					title: "Nařídí volný úder pro bránící družstvo ze stejného místa.",
					isRight: true,
				},
				{
					title: "Nechá pokračovat ve hře, protože k porušení pravidel nedošlo.",
					isRight: false,
				},
				{
					title: "Přeruší hru a nechá útočící družstvo rozehrát volný úder znovu.",
					isRight: false,
				},
				{
					title: "Nařídí vhazování na nejbližším bodě pro vhazování.",
					isRight: false,
				},
			],
		},

		{
			title: "Bránící hráč srazí míček mimo hřiště do „autu“. Útočící hráč přímo z rozehrání bez nahrávky se spoluhráčem vystřelí a vstřelí branku. Rozhodčí:",
			options: [
				{ title: "Uzná branku.", isRight: true },
				{
					title: "Neuzná branku a nařídí vhazování v rohu hřiště.",
					isRight: false,
				},
				{
					title: "Neuzná branku a nařídí volný úder pro bránící družstvo v rohu hřiště.",
					isRight: false,
				},
				{
					title: "Neuzná branku a nechá volný úder opakovat ze stejného místa.",
					isRight: false,
				},
			],
		},

		{
			title: "Míček se od florbalky bránícího hráče odrazí vysoko do vzduchu a dotkne se stropu haly. Rozhodčí:",
			options: [
				{
					title: "Nařídí rozehrání pro útočící družstvo 1,5m od mantinelu ve stejné vzdálenosti od středové čáry, kde se míček stropu dotkl.",
					isRight: true,
				},
				{
					title: "Nechá pokračovat ve hře, protože k porušení pravidel nedošlo.",
					isRight: false,
				},
				{
					title: "Nařídí volný úder pro útočící družstvo z místa na hřišti, které je přímo pod místem, kde se míček stropu dotkl.",
					isRight: false,
				},
				{
					title: "Nařídí vhazování na nejbližším bodě pro vhazování.",
					isRight: false,
				},
			],
		},

		{
			title: "Útočící hráč těsně přestřelí branku a míček přímo bez doteku dalších hráčů opustí hřiště do „autu“ na krátké straně hřiště. Rozhodčí:",
			options: [
				{
					title: "Nařídí rozehrání pro bránící družstvo v rohu hřiště.",
					isRight: true,
				},
				{
					title: "Nařídí rozehrání pro bránící družstvo z místa, kde míček opustil hrací plochu a rozehrání posune 1,5m od mantinelu.",
					isRight: false,
				},
				{ title: "Nařídí vhazování v rohu hřiště.", isRight: false },
				{
					title: "Nařídí rozehrání pro útočící družstvo v rohu hřiště.",
					isRight: false,
				},
			],
		},

		{
			title: "Rozhodčí posoudil zákrok bránícího hráče ve velkém brankovišti jako nedovolený přestupek a nařídil volný úder. Z jakého místa bude volný úder zahrán?",
			options: [
				{
					title: "3,5m od malého brankoviště na pomyslné prodloužené spojnici středu brankové čáry a místa, kde k přestupku došlo.",
					isRight: true,
				},
				{
					title: "Vždy přesně z místa, kde k přestupku došlo.",
					isRight: false,
				},
				{ title: "Z rohu hřiště.", isRight: false },
				{ title: "Z hranice malého brankoviště.", isRight: false },
			],
		},

		{
			title: "Hráč s míčkem se široce rozkročí, aby si pokryl míček tělem. Bránící hráč mu míč chytře sebere svou nohou mezi jeho nohama. Rozhodčí:",
			options: [
				{
					title: "Nařídí volný úder pro útočící družstvo za hru mezi nohama.",
					isRight: true,
				},
				{
					title: "Nechá pokračovat ve hře, protože mezi nohama se nesmí hrát pouze florbalkou.",
					isRight: false,
				},
				{
					title: "Udělí bránícímu hráči trest na 2 minuty za hru mezi nohama.",
					isRight: false,
				},
				{
					title: "Nechá pokračovat ve hře, protože hru mezi nohama pravidla florbalu nezakazují.",
					isRight: false,
				},
			],
		},

		{
			title: "Bránící hráč nártem odkopne padající míček, přičemž ho zasáhne v úrovni stehen. Rozhodčí:",
			options: [
				{
					title: "Nařídí volný úder pro útočící družstvo za vysoký kop.",
					isRight: true,
				},
				{
					title: "Nechá pokračovat ve hře, protože nártem se nesmí do míče kopnout jen nad úrovní pasu.",
					isRight: false,
				},
				{
					title: "Udělí bránícímu hráči trest na 2 minuty za vysoký kop.",
					isRight: false,
				},
				{
					title: "Nechá pokračovat ve hře, protože vysoký kop pravidla florbalu nezakazují.",
					isRight: false,
				},
			],
		},

		{
			title: "Útočící hráč vstřelí z dorážky branku, přičemž v okamžiku dorážky stojí nohou na čáře vyznačující malé brankoviště. Rozhodčí:",
			options: [
				{
					title: "Branku neuzná a nařídí volný úder pro bránící družstvo pro postavení hráče v brankovišti.",
					isRight: true,
				},
				{
					title: "Branku uzná, protože v malém brankovišti nesmí hrát pouze bránící hráč.",
					isRight: false,
				},
				{
					title: "Branku uzná, protože hráč stál pouze na čáře a ta není součástí malého brankoviště.",
					isRight: false,
				},
				{
					title: "Branku neuzná a nařídí vhazování na středovém bodě.",
					isRight: false,
				},
			],
		},

		{
			title: "Bránící hráč stojí v rohu hřiště a sleduje k němu padající míček. Rozhodne se před dobíhajícím útočníkem míček odhlavičkovat. Rozhodčí:",
			options: [
				{
					title: "Nařídí volný úder pro útočící družstvo za hru hlavou.",
					isRight: true,
				},
				{
					title: "Nechá pokračovat ve hře, protože hlavou se hrát může.",
					isRight: false,
				},
				{
					title: "Udělí bránícímu hráči trest na 2 minuty za hru hlavou.",
					isRight: false,
				},
				{
					title: "Přeruší hru, zjistí, zda není hlavičkující hráč zraněn a nařídí vhazování.",
					isRight: false,
				},
			],
		},

		{
			title: "Bránící hráč hlídá před brankou clonícího útočníka a plně se věnuje tomuto hráči. V ten moment dojde ke střele z poloviny hřiště, která je zblokována a zasáhne bránícího hráče z boku do hlavy. Rozhodčí:",
			options: [
				{
					title: "Nechá pokračovat ve hře, protože bránící hráč nehrál hlavou úmyslně.",
					isRight: true,
				},
				{
					title: "Nařídí volný úder pro útočící družstvo za hru hlavou.",
					isRight: false,
				},
				{
					title: "Udělí bránícímu hráči trest na 2 minuty za hru hlavou.",
					isRight: false,
				},
				{
					title: "Nařídí trestné střílení, protože se jednalo o přestupek, který přerušil brankovou situaci.",
					isRight: false,
				},
			],
		},

		{
			title: "Hráč provádějící trestné střílení je neustále tělem v pohybu vpřed, ale těsně před brankářem si stáhne špičkou čepele míček mírně zpět a vstřelí branku. Rozhodčí:",
			options: [
				{
					title: "Uzná branku, protože míček se může během trestného střílení vrátit zpět, pokud je v pohybu vpřed tělo hráče.",
					isRight: true,
				},
				{
					title: "Neuzná branku, ale nařídí opakování trestného střílení, protože se míček vrátil zpět pouze mírně.",
					isRight: false,
				},
				{
					title: "Neuzná branku, protože míček se během trestného střílení za žádných okolností nesmí vrátit ani mírně zpět.",
					isRight: false,
				},
				{
					title: "Neuzná branku, protože míček se během trestného střílení může vrátit zpět pouze na vlastní polovině hřiště.",
					isRight: false,
				},
			],
		},

		{
			title: "Hráč provádějící trestné střílení je zaskočen rychlým vyjetím brankáře, udělá kličku do strany, přičemž se současně vrátí mírně zpět svým tělem i s míčkem. Rozhodčí:",
			options: [
				{
					title: "Neuzná branku, protože během trestného střílení se nesmí hráč a míček současně zastavit nebo vrátit zpět.",
					isRight: true,
				},
				{
					title: "Neuzná branku, ale nařídí opakování trestného střílení, protože se hráč i míček vrátili zpět pouze mírně.",
					isRight: false,
				},
				{
					title: "Uzná branku, protože pohyb hráče a míčku není během trestného střílení nijak omezen.",
					isRight: false,
				},
				{
					title: "Uzná branku, protože brankář nesmí vyjet proti hráči provádějícímu trestné střílení.",
					isRight: false,
				},
			],
		},
	],
};
