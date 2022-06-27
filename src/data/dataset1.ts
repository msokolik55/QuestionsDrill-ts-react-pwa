import { IDataset } from "../models/Dataset";

export const dataset1: IDataset = {
	name: "IB109 Uzatvorené otázky",
	questions: [
		{
			title: "Cache jako obecný mechanismus přináší problém",
			options: [
				{
					title: "Komplikované kompilace imperativních jazyků",
					isRight: false,
				},
				{
					title: "Koherence dat uložených na vícero místech",
					isRight: true,
				},
				{
					title:
						"Manipulace s hotovostí, nevykazuje výhody bezkontaktních plateb",
					isRight: false,
				},
				{
					title:
						"Nestálých proměnných, kterým se lze v jazyce C bránit použitím klíčového slovíčka volatile",
					isRight: false,
				},
			],
		},

		{
			title: "Při umístění více výpočetních jader na jeden chip platí, že",
			options: [
				{
					title:
						"Každé výpočetní jádro má svou vlastní (nesdílenou) cestu pro přístup do sdílené paměti",
					isRight: false,
				},
				{
					title:
						"Výkon jednoho jádra je menší, než by mohl být v případě, kdy by jádro bylo v procesoru umístěno samo",
					isRight: true,
				},
				{
					title:
						"Více výpočetních jader na menší ploše generuje při zátěži méně tepla, než teplo generované při zátěži jednim takovým jádrem v samostatném chipu",
					isRight: false,
				},
				{
					title:
						"Všechna výpočetní jádra pracují po celou dobu na stejné frekvenci a nikdy jinak",
					isRight: false,
				},
			],
		},

		{
			title:
				"Tzv. falešné sdílení v cache koherentním systému nastává, pokud z více vláken zapisuji",
			options: [
				{
					title:
						"Do různých sdílených proměnných, které nejsou uloženy ve stejné cache line",
					isRight: false,
				},
				{
					title:
						"Do jedné sdílené proměnné, která je uložena ve více různých cache line v téže cache",
					isRight: false,
				},
				{ title: "Do jedné sdílené proměnné", isRight: false },
				{
					title:
						"Na jednu cache line, i když vlákna prokazatelně zapisují do různých proměnných",
					isRight: true,
				},
			],
		},

		{
			title:
				"Pokud v programovacím jazyce C ve vícevláknové aplikaci provedu přiřazení hodnoty do sdílené proměnné, která není nijak jinak označena, mám jistotu, že ",
			options: [
				{
					title: "Ani jedno z ostatních tvrzení není správně",
					isRight: true,
				},
				{
					title:
						"Proměnná bude realizována na zásobníku vlákna, které přiřazení provedlo",
					isRight: false,
				},
				{
					title:
						"Přiřazení, které vlákno provedlo, bude v konečném čase viditelné v ostatních vláknech",
					isRight: false,
				},
				{
					title: "Proměnná bude realizována pouze registrem",
					isRight: false,
				},
			],
		},

		{
			title:
				"Uváznutí může nastat, pokud vlákna žádají o více sdílených unikátních zdrojů (třeba o 2 různé mutex zámky)",
			options: [
				{
					title: "Ani jedno z ostatních uvedených tvrzení",
					isRight: false,
				},
				{
					title: "Jednotlivě v pevně definovaném předepsaném pořadí",
					isRight: true,
				},
				{ title: "Jednotlivě v náhodném pořadí", isRight: false },
				{ title: "Naráz v jedné operaci", isRight: false },
			],
		},

		{
			title: "Funkce pthread_join je v POSIX Threads volána zásadně",
			options: [
				{ title: "S parametrem v libovolném vlákně", isRight: true },
				{
					title: "S parametrem a pouze v hlavním vlákně",
					isRight: false,
				},
				{ title: "Bez parametru v libovolném vlákně", isRight: false },
				{
					title: "Bez parametru a pouze v hlavním vlákně",
					isRight: false,
				},
			],
		},

		{
			title:
				"Pokud chce vlákno usnout nad podmínkovou proměnnou v POSIX Threads je z pohledu TOHOTO vlákna očekávaná posloupnost POSIX Threads funkcí tato:",
			options: [
				{
					title:
						"Cond_wait, mutex_lock, kritická sekce podmínkové proměnné, mutex_unlock",
					isRight: false,
				},
				{
					title:
						"Mutex_lock, cond_wait, kritická sekce podmínkové proměnné, mutex unlock",
					isRight: true,
				},
				{
					title:
						"Cond_wait, mutex_lock, kritická sekce podmínkové proměnné, cond_signal, mutex_unlock",
					isRight: false,
				},
				{
					title:
						"Mutex_lock cond_wait, mutex_unlock, mutex_lock, kritická sekce podmínkové proměnné, mutex_unlock",
					isRight: false,
				},
			],
		},

		{
			title: "Lock-free procedura je procedura, pro kterou lze garantovat, že",
			options: [
				{
					title:
						"Je procedura, které nepoužívá více než dvě vlákna, a proto nemůže nastat uváznutí",
					isRight: false,
				},
				{
					title:
						"Je procedura, ve které aspoň jedno vlákno dokončí svou činnost v konečném čase, ale může být přítomen částečný live-lock",
					isRight: true,
				},
				{ title: "Je wait-free", isRight: false },
				{
					title:
						"Je procedura, ve které všechna vlákna dokončí svou činnost v konečném čase (není ani částečný live-lock)",
					isRight: false,
				},
			],
		},

		{
			title: "Při programování vícevláknových aplikací ve standardu OpenMP",
			options: [
				{
					title:
						"Se ve výsledné binárce volání funkce pro vytvoření vlákna vůbec nevyskytuje",
					isRight: false,
				},
				{
					title:
						"Volání funkce pro vytvoření vlákna zajistí operační systém na základě značek v kódu",
					isRight: false,
				},
				{
					title:
						"Je nízkoúrovňová implementace paralizace nahrazena kompilací (překladem) programu do výsledné binárky",
					isRight: false,
				},
				{
					title:
						"Do výsledné binárky funkci pro vytvoření vlákna doplní překladač",
					isRight: true,
				},
			],
		},

		{
			title: "Aplikovat metody redukce režie interakce",
			options: [
				{
					title: "Je možné před procesem mapování, ale po procesu dekompozice",
					isRight: false,
				},
				{
					title: "Je možné před procesem dekompozice, ale po procesu mapování",
					isRight: false,
				},
				{
					title: "Ani jedno z ostatních tvrzení není správné",
					isRight: true,
				},
				{
					title: "Je možné před procesem dekompozice a mapování",
					isRight: false,
				},
			],
		},

		{
			title:
				"Přechod od blokové-cyklické distribuce k cyklické distribuci datových polí při mapování",
			options: [
				{
					title:
						"Je metoda dekompozice, kterí mění (zjěmňuje) granularitu řešené úlohy",
					isRight: false,
				},
				{
					title:
						"Je vhodný, pokud blokově-cyklický přístup nekončí rovnoměrnou zátěží na jednotlivých CPU",
					isRight: true,
				},
				{
					title:
						"Je technika, které je nutná pro cyklické přiřazování bloků úloh na jednotlivá výpočetní jádra (v blokově-cyklickém přístupu to není možné)",
					isRight: false,
				},
				{
					title: "Je úplný nesmysl, tyto pojmy spolu vůbec nesouvisí",
					isRight: false,
				},
			],
		},

		{
			title: "Scatter je, když",
			options: [
				{
					title: "Jedna úloha sbírá unikátní data od ostatních úloh",
					isRight: false,
				},
				{
					title: "Jedna úloha posílá všem ostatním identická data",
					isRight: false,
				},
				{
					title: "Jedna úloha posílá unikátní zprávu každé další úloze",
					isRight: true,
				},
				{
					title: "Každá úloha posílá jednu a tutéž zprávu všem ostatním úlohám",
					isRight: false,
				},
			],
		},

		{
			title:
				"Adresování procesů v rámci standardu MPI je realizováno skrze tzv. MPI komunikátor. V komunikátoru MPI_COMM_WORLD, který sdružuje všechny participující procesy, platí, že",
			options: [
				{
					title:
						"Procesy jsou identifikovány malým celým číslem s tím, že hlavní proces má identifikátor nejmenší",
					isRight: true,
				},
				{
					title:
						"Procesy jsou identifikovány svou IP adresou s tím, že hlavní proces je ten, jehož IP adresa je největší",
					isRight: false,
				},
				{
					title:
						"Procesy jsou identifikovány malým číslem s tím, že hlavní proces má identifikátor nevětší",
					isRight: false,
				},
				{
					title:
						"Procesy jsou identifikovány svou IP adresou s tím, že hlavní proces je ten, jehož IP adresa je nejmenší",
					isRight: false,
				},
			],
		},

		{
			title:
				"Pokud urychlím trojnásobně 40 % kódu, maximální celkové zrychlení vypočítané Amdahlovým zákonem je",
			options: [
				{ title: "1.2", isRight: false },
				{ title: "2.1", isRight: false },
				{ title: "1.29", isRight: false },
				{ title: "1.3636", isRight: true },
			],
		},

		{
			title:
				"Cache jako obecný mechanismus pomáhá při paralelním výpočtu, protože",
			options: [
				{
					title: "Ani jedno z ostatních tvrzení není správně",
					isRight: false,
				},
				{
					title:
						"Zakrývá rozdíl vyšší rychlosti procesoru vůči menší rychlosti přenosu dat z paměti",
					isRight: true,
				},
				{
					title: "Geo-cache-ky se snadněji nacházejí ve více lidech",
					isRight: false,
				},
				{
					title: "Chrání procesor před zahlcením dat z paměti",
					isRight: false,
				},
			],
		},

		{
			title:
				"V běžných operačních systémech sdílí různá vlákna stejného procesu",
			options: [
				{ title: "Proměnné prostředí", isRight: true },
				{ title: "Lokální proměnné", isRight: false },
				{ title: "Frontu signálů", isRight: false },
				{
					title: "Program counter (ukazatel na právě vykonávanou instrukci)",
					isRight: false,
				},
			],
		},

		{
			title:
				"Při souběžné postupné inkrementaci sdílené proměnné (postupné přičítání jedničky) realizované minimálně ve dvou vláknech, je výsledná hodnota inkrementu",
			options: [
				{
					title:
						"Rovna součtu inkrementů, pouze pokud je proměnná označena jako nestálá (v C například pomocí klíčového slova volatile)",
					isRight: false,
				},
				{
					title:
						"Rovna součtu inkrementů, pokud sdílená proměnná není označena jako nestálá (v C například pomocí klíčového slova volatile)",
					isRight: false,
				},
				{
					title:
						"Rovna součtu inkrementů, jen ve velmi nepravděpodobných, případně jinak speciálních případech",
					isRight: true,
				},
				{
					title:
						"Pokud není sdílená proměnná označena jako nestálá (v C například pomocí klíčového slova volatile), její hodnota se vůbec nezmění",
					isRight: false,
				},
			],
		},

		{
			title: "Uváznutí může nastat, pokud vlákna mají",
			options: [
				{
					title: "Ani jedno z ostatních uvedených tvrzení.",
					isRight: true,
				},
				{
					title: "Neuspořádané inkrementální požadavky na neomezené zdroje.",
					isRight: false,
				},
				{
					title: "Uspořádané neinkrementální požadavky na neomezené zdroje.",
					isRight: false,
				},
				{
					title: "Uspořádané inkrementální požadavky na neomezené zdroje.",
					isRight: false,
				},
			],
		},

		{
			title:
				"Volání funkce pthread_create z POSIX Threads instruuje operační systém k vytvoření vlákna a",
			options: [
				{
					title:
						"Volání skončí až po té, co vytvářené vlákno zavolá svou první funkci z POSIX Thread",
					isRight: false,
				},
				{
					title: "Volání skončí bez ohledu na stav výpočtu vytvářeného vlákna",
					isRight: false,
				},
				{
					title:
						"Volání skončí až po té, co vytvářené vlákno svůj výpočet dokončilo",
					isRight: false,
				},
				{
					title:
						"Volání skončí až po té, co je vlákno vytvořeno a započalo svůj výpočet",
					isRight: true,
				},
			],
		},

		{
			title:
				"Při volání pthread_cond_broadcast v POSIX Threads se vlákna čekající v rámci dané podmínkové proměnné budí postupně",
			options: [
				{
					title:
						"V pořadí podle toho, jak se jim podaří získat související mutex",
					isRight: false,
				},
				{ title: "V pořadí, v jakém byla uspána", isRight: false },
				{
					title:
						"V nedefinovaném avšak pokaždé stejném pořadí, závisí na konkrétní implementaci",
					isRight: false,
				},
				{
					title:
						"Tak, že první vzbuzené vlákno získá související mutex, a pak budí voláním příslušné POSIX Threads funkce další čekající vlákno",
					isRight: false,
				},
			],
		},

		{
			title:
				"Obecně při realizaci paralelního for-cyklu je vyrovnávání zátěže na jednotlivá CPU realizována",
			options: [
				{
					title:
						"Zvětšováním (případně zmenšováním) rozsahu, pro který je for-cyklus jako celek počítán",
					isRight: false,
				},
				{
					title:
						"Přidáváním a ubíráním paralelně běžících vláken nad daným for-cyklem",
					isRight: false,
				},
				{
					title:
						"Automaticky plánovačem (součást většiny moderních operačních systémů)",
					isRight: false,
				},
				{
					title:
						"Uváženou distribucí, redistribucí, jednotlivých iterací for-cyklu mezi participující vlákna",
					isRight: true,
				},
			],
		},

		{
			title: "U průzkumové dekompozice platí, že",
			options: [
				{
					title: "Paralelní řešení může vykazovat superlineární zrychlení",
					isRight: true,
				},
				{
					title: "Je vhodná pro úlohy se sekvencí datově závislých podúloh",
					isRight: false,
				},
				{
					title:
						"Není možné ji použít pro hledání výherní strategie v pozičních hrách (např. šachy)",
					isRight: false,
				},
				{
					title:
						"Celkové množství práce paralelního řešení je vždy stejné jako objem práce provedené sekvenčním řešením",
					isRight: false,
				},
			],
		},

		{
			title:
				"Při analýze výkonu paralelní aplikace je možné vzít v potaz tzv. průměrný stupeň souběžnosti. Pro výpočet této charakteristiky je třeba znát",
			options: [
				{
					title:
						"Graf závislosti úloh a minimum množství práce, které vykoná každá úloha (některé úlohy mohou vykonat práce víc)",
					isRight: false,
				},
				{
					title:
						"Kritickou cestu v grafu závislosti úloh, graf závislosti úloh a celkové množství práce",
					isRight: false,
				},
				{
					title: "Počet úloh a průměrné množství práce na jednu úlohu",
					isRight: false,
				},
				{
					title:
						"Množství práce na kritické cestě a celkové množství práce (graf závoslosti úloh není potřeba)",
					isRight: true,
				},
			],
		},

		{
			title: "Změna struktury dat při All-To-All vysílání je",
			options: [
				{ title: "P*m*m -> p*m", isRight: false },
				{ title: "P*m*m -> m", isRight: false },
				{ title: "P*m -> p*p*m", isRight: true },
				{ title: "P*m -> p*m*m", isRight: false },
			],
		},

		{
			title:
				"Tzv. zarovnaná alokace paměti v kontextu práce s cache zaručí, že",
			options: [
				{
					title:
						"Alokovaný kus paměti bude alokován tak, aby zasahoval do nejmenšího možného počtu cache line",
					isRight: true,
				},
				{
					title: "Alokované kusy paměti začínají vždy na stejné adrese",
					isRight: false,
				},
				{
					title:
						"Alokované kusy paměti mají vždy velikost maximálně jedné cache line",
					isRight: false,
				},
				{
					title:
						"Alokovaný kus paměti bude alokován tak, aby začínal na adrese dělitelné čtyřmi",
					isRight: false,
				},
			],
		},

		{
			title: "Typy POSIXových mutexů jsou:",
			options: [
				{ title: "Normální, striktní, líný", isRight: false },
				{
					title: "Skritkní, rekurzivní s detekcí chyby, rekurzivní",
					isRight: false,
				},
				{
					title: "Normální, normální s detekcí chyby, rekurzivní",
					isRight: true,
				},
				{
					title: "Normální, rekurzivní, rekurzivní s detekcí chyby",
					isRight: false,
				},
			],
		},

		{
			title:
				"Pokud operace odeslání zprávy skončí, jakmile jsou data na cestě, a zároveň nelze porušit sémantiku operace, jedná se o",
			options: [
				{ title: "Baffrovanou blokující komunikaci", isRight: true },
				{ title: "Baffrovanou neblokující komunikaci", isRight: false },
				{
					title: "Nebaffrovanou neblokující komunikaci",
					isRight: false,
				},
				{ title: "Nebaffrovanou blokující komunikaci", isRight: false },
			],
		},

		{
			title: "Které tvrzení je pro POSIX Threads pravdivé",
			options: [
				{
					title: "Podmínkové proměnné nevyžadují použití mutexů",
					isRight: false,
				},
				{
					title:
						"Vlákno čekající v rámci jedné podmínkové proměnné může signalizovat v rámci jiné podmínkové proměnné",
					isRight: false,
				},
				{
					title: "Vlákno může vlastnit více než jeden mutex",
					isRight: true,
				},
				{
					title: "Mutex může být odemčen kterýmkoliv vláknem",
					isRight: false,
				},
			],
		},

		{
			title: "Superlineární zrychlení",
			options: [
				{
					title: "Nemůže být způsobeno volbou neoptimálního sekvenčnho řešení",
					isRight: false,
				},
				{ title: "Je jev, který neexistuje", isRight: false },
				{
					title: "Ani jedno z ostatních tvrzení není správné",
					isRight: true,
				},
				{
					title:
						"Je jev, přítomný pouze při použití průzkumové dekompozice problému",
					isRight: false,
				},
			],
		},

		{
			title: "Instrukce CAS má obvykle hardwarovou podporu pro objekty",
			options: [
				{
					title:
						"Libovolné velikosti (parametry funkce jsou ukazatele, z nich velikost objektu, na který ukazují, nelze určit)",
					isRight: false,
				},
				{
					title: "Ve velikosti jedné poloviny slova procesoru",
					isRight: false,
				},
				{
					title: "Ve velikosti, která je dělitelná velikostí slova procesoru",
					isRight: false,
				},
				{
					title: "Ve velikosti jednoho, až dvou slov procesoru",
					isRight: true,
				},
			],
		},

		{
			title: "Výhodou programu implementovaného dle standardu OpenMP je, že",
			options: [
				{
					title: "Operační systém vůbec nemusí vytvářet a spravovat vlákna",
					isRight: false,
				},
				{
					title:
						"Výsledný binární kód je řádově rychlejší, protože ve zdrojovém kódu programátor neuvádí funkce pro explicitní manipulaci s vlákny",
					isRight: false,
				},
				{
					title:
						"Chování programu je možné ovlivnit prostředím, ve kterém program běží",
					isRight: true,
				},
				{
					title:
						"Při běhu programu není třeba explicitně řídit přístup ke sdíleným proměnným",
					isRight: false,
				},
			],
		},

		{
			title:
				"V kontextu paralelního programování, byl Michael J. Flynn ten, kdo",
			options: [
				{
					title: "Napsal novely o Flynnu Carsenovi a jeho dobrodružstvích",
					isRight: false,
				},
				{
					title:
						"Popsal základní taxonomii klasifikace počítačových architektur",
					isRight: true,
				},
				{
					title:
						"Autor vědecké publikace, na základě které obsahují soudobé procesory instrukci CAS",
					isRight: false,
				},
				{
					title:
						"Řadový paralelní programátor pro herní konzolu Nintendo Switch",
					isRight: false,
				},
			],
		},

		{
			title:
				"Spuštění nového vlákna v existující procesu je v porovnání se spuštěním nového procesu",
			options: [
				{
					title:
						"Pomalejší, neboť operační systém musí vláknu zajistit potřebné soukromí",
					isRight: false,
				},
				{
					title:
						"Rychlejší, neboť start takového vlákna má menší režii, než start nového procesu",
					isRight: true,
				},
				{
					title:
						"Rychlejší, neboť nově spouštěné vlákno sdílí registry s ostatními běžícími vlákny",
					isRight: false,
				},
				{
					title:
						"Pomalejší, neboť se v paměti musí vytvořit kopie kódu vykonávaného vlákny stávajícího procesu",
					isRight: false,
				},
			],
		},

		{
			title:
				"Po vytvoření vlákna v rozhraní POSIX Threads se mohu na vytvořené vlákno dostat skrze",
			options: [
				{
					title:
						"Tzv. handle, tj v POSIX Threads definovaný typ pro odkaz na vlákno",
					isRight: true,
				},
				{
					title:
						"Nic, vytvořené vlákno nemá smysl v POSIX Threads nadále adresovat/odkazovat se na něj",
					isRight: false,
				},
				{ title: "Ukazatej typu void***", isRight: false },
				{
					title:
						"Index do tabulky vláken, která je udržována knihovnou POSIX Threads a uchovává všechny důležité vlastnosti vláken, jako např. zda je odpojitelné, zda vlákno vlastní nějaký mutex, a podobné",
					isRight: false,
				},
			],
		},

		{
			title:
				"Použití lock-free programování v jazyce C je obecně obtížné, protože",
			options: [
				{
					title:
						"Jazyk C nemá příkaz pro zamčení mutexu, tudíž je nutné importovat knihovnu POSIX Threads",
					isRight: false,
				},
				{
					title:
						"V jazyce C musí při lock-free programování programátor explicitně pracovat s ukazateli na ukazatel na ukazatel (void ***)",
					isRight: false,
				},
				{
					title: "Jazyk C nemá příkaz, který odpovídá instrukci TEST-AND-SET",
					isRight: false,
				},
				{
					title:
						"Runtime jazyka C nepodporuje automatické uvolňování nepoužívané dynamicky alokované paměti",
					isRight: true,
				},
			],
		},

		{
			title:
				"Využít nebafrovanou blokující /neblokující komunikaci má největší smysl, pokud",
			options: [
				{ title: "Posílám malé počty malých zpráv", isRight: false },
				{ title: "Posílám velké počty velkých zpráv", isRight: true },
				{ title: "Tato kombinace se nevyplatí nikdy", isRight: false },
				{ title: "Posílám velké počty malých zpráv", isRight: false },
			],
		},

		{
			title:
				"Při překladu C-čkové aplikace do spustitelné podoby je zaručeno, že při přiřazení do sdílené proměnné, která je označena klíčovým slovíčkem volatile",
			options: [
				{
					title:
						"Bude vygenerována instrukce, která zapisuje hodnotu do paměti, a do paměti tato hodnota také doputuje",
					isRight: true,
				},
				{
					title:
						"Bude vygenerována instrukce, která zapisuje hodnotu do paměti a to tak, že se tato hodnota nemůže uložit v cache",
					isRight: false,
				},
				{
					title:
						"Bude vygenerována instrukce, která zapisuje hodnotu do paměti, do paměti tato hodnota ovšem nemusí doputovat, neboť může zůstat pouze v cache",
					isRight: false,
				},
				{
					title:
						"Nemusí být vygenerována instrukce, která zapisuje hodnotu do paměti, neboť zápis do paměti zajistí paměťový model procesoru",
					isRight: false,
				},
			],
		},

		{
			title:
				"Jednoduché řešení zamykání pomocí jednobitové proměnné vyžaduje, aby systém měl",
			options: [
				{ title: "Nevyžaduje žádnou HW podporu", isRight: false },
				{
					title:
						"HW podporu pro atomickou a globálně viditelnou operaci Test-and-set",
					isRight: true,
				},
				{
					title: "HW podporu pro atomickou realizaci paměťové bariéry",
					isRight: false,
				},
				{
					title:
						"HW podporu pro atomické (nepřerušitelné) nastavení bitové proměnné na danou hodnotu",
					isRight: false,
				},
			],
		},

		{
			title:
				"Funkce pthread_exit z POSIX Threads při svém volání provádí mimojiné i následující činnost:",
			options: [
				{ title: "Ukončuje běh paralelního programu", isRight: false },
				{
					title: "Ani jedno z ostatních tvrzení není správně",
					isRight: true,
				},
				{
					title: "Žádá oslovené vlákno o jeho ukončení",
					isRight: false,
				},
			],
		},

		{
			title:
				"Čím méně práce je realizováno mimo tzv. kritickou cestu v grafu závislosti úloh, tím",
			options: [
				{
					title: "Větší je potenciáíl pro paralelizaci",
					isRight: false,
				},
				{
					title: "Menší je průměrný stupeň souběžnosti",
					isRight: true,
				},
				{
					title: "Menší je počet úloh v grafu závislosti úloh",
					isRight: false,
				},
				{
					title: "Větší je počet úloh v grafu závislosti úloh",
					isRight: false,
				},
			],
		},

		{
			title: "Zrychlení v kontextu paralelního počítání je",
			options: [
				{
					title:
						"Pozorování, že paralelní výpočet stejného problému trvá kratší čas, než výpočet sekvenčním algoritmem",
					isRight: false,
				},
				{
					title:
						"Poměr času potřebného k vyřešení úlohy nejlepším sekvenčním řešením a času potřebným k vyřešení úlohy na n procesních jednotkách",
					isRight: true,
				},
				{
					title: "První derivace rychlosti výpočtu podle času",
					isRight: false,
				},
				{
					title:
						"Číslo v intervalu <0,1>, které říká, na kolik procent času nejlepšího sekvenčního řešení se zkrátí výpočet při použití daného počtu procesních jednotek",
					isRight: false,
				},
			],
		},
	],
};
