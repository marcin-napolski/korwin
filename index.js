var app = new Vue({
    el: '#app',
    data: {
      author: 'Janusz Korwin-Mikke',
      parts: [{value:0},{value:0},{ value:0},{value:0},{value:0},{value:0}],
      columns: [
        [
         { text: 'Proszę zwrócić uwagę, że' },
         { text: 'I tak mam trzy razy mniej czasu, więc proszę mi pozwolić powiedzieć:' },
         { text: 'Państwo się śmieją, ale'},
         { text: 'Ja nie potrzebowałem edukacji seksualnej, żeby wiedzieć, że:' },
         { text: 'No niestety:'},
         { text: 'Gdzie leży przyczyna problemu? Ja państwu powiem:' },            
         { text: 'Państwo chyba nie wiedzą, że' },
         { text: 'Oświadczam kategorycznie:' },
         { text: 'Powtarzam:'},
         { text: 'Powiedzmy to z całą mocą:' },
         { text: 'W Polsce dzisiaj' },
         { text: 'Państwo sobie nie zdajecie sprawy, że'},
         { text: 'To ja przepraszam bardzo:' },
         { text: 'Otóż nie wiem, czy pan wie, że' },
         { text: 'Yyyy...'},
         { text: 'Ja chcę powiedzieć jedną rzecz:' },
         { text: 'Trzeba powiedzieć jasno:' },
         { text: 'Jak powiedział wybitny krakowianin Stanisław Lem,' },
         { text: 'Proszę mnie dobrze zrozumieć:' },
         { text: 'Ja chciałem państwu przypomnieć, że' },
         { text: 'Niech państwo nie mają złudzen:' },
         { text: 'Powiedzmy to wyraźnie:' }
        ],
        [{ text: 'przedstawiciele czerwonej hołoty' },{ text: 'ci wszyscy (tfu!) geje' },{ text: 'funkcjonariusze reżimowej telewizji' },{ text: 'tak zwani ekolodzy' },{ text: 'ci wszyscy (tfu!) demokraci' },{ text: 'agenci bezpieki' },{ text: 'feminazistki' }],
        [{ text: 'zupełnie bezkarnie' },{ text: 'całkowicie bezczelnie' },{ text: 'o poglądach na lewo od komunizmu' },{ text: 'celowo i świadomie' },{ text: 'z premedytacją' },{ text: 'od czasów Okrągłego Stołu' },{ text: 'w ramach postępu' }],
        [{ text: 'nawołują do podniesienia podatków' },{ text: 'próbują wyrzucić kierowców z miast' },{ text: 'próbują skłócic Polske z Rosją' },{ text: 'głoszą brednie o globalnym ociepleniu' },{ text: 'zakazują posiadania broni' },{ text: 'nie dopuszczają prawicy do władzy' },{ text: 'uczą dzieci homoseksualizmu' }],
        [{ text: 'bo dzięki temu moga kraść' },{ text: 'bo dostają za to pieniądze' },{ text: 'bo tak sie uczy w państwowej szkole' },{ text: 'bo bez tego (tfu!) demokracja nie moze istnieć' },{ text: 'bo głupich jest więcej niż mądrych' },{ text: 'bo chcą tworzyc raj na ziemi' },{ text: 'bo chcą niszczyć cywilizację białego człowieka' }],
        [{ text: 'przez kolejne kadencje.' },{ text: 'o czym sie nie mówi.' },{ text: 'i własnie dlatego Europa umiera.' },{ text: 'ale przyjdą muzułmanie i zrobią porządek.' },{ text: '- tak samo zresztą jak za Hitlera.' },{ text: '- proszę zobaczyć co sie dzieje na Zachodzie, jesli mi państwo nie wierzą.' },{ text: 'co lat temu sto nikomu nie przyszłoby nawet do głowy.' }]
      ]
    }
  })
