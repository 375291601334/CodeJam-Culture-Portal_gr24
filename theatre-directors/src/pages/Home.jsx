import React from 'react';
import FormattedMessage from 'react-intl';
import DirectorCard from '../components/DirectorsList_Search/SearchResultCard';
import { directorsInfo } from '../assets/textInfo/ru/directorsInfo';

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function getRndElement(arr) {
  const i = getRndInteger(0, arr.length - 1);
  return arr[i];
}
function Home() {
  return (
    <div className="App">
      <h1>
        <FormattedMessage
          id="Home.Title"
          defaultMessage="Театральные режиссеры Беларуси"
        />
      </h1>
      <article>
        <p>
          <FormattedMessage
            id="Home.article.p1"
            defaultMessage="Белорусская театральная история насчитывает не одно столетие.
            Белорусский профессиональный театр развился из древних народных обрядов,
            творчества бродячих музыкантов, придворных трупп белорусских магнатов,
            деятельности любительских коллективов рубежа XIX–XX веков."
          />
        </p>
        <p>
          <FormattedMessage
            id="Home.article.p2"
            defaultMessage="Но на белорусской земле бродячие артисты не просто выступали, а постигали
            азы своего профессионального мастерства. Известно, что в Сморгони до середины
            XIX века существовала единственная в Европе медвежья академия. Отловленных
            в лесах медвежат учили танцевать, а потом скоморохи отправлялись с ними на ярмарки
            в Россию, Польшу, Венгрию, Германию."
          />
        </p>
        <p>
          <FormattedMessage
            id="Home.article.p3"
            defaultMessage="Ярчайшая страница в истории народного театрального искусства – белорусская батлейка.
            Традицию устанавливать рождественские батлейки заложил святой Франциск Ассизский в XIII
            веке в Италии. Но в Беларуси, где кроме канонических сюжетов бродячие артисты в
            начале XVI века представляли и сценки из жизни, это искусство получило народное признание
            и сохранилось до сегодняшнего дня. Традицию в наше время поддерживают многие кукольные
            театры республики, практически во всех костелах на Рождество также можно увидеть
            представление в жанре батлейки."
          />
        </p>
        <p>
          <FormattedMessage
            id="Home.article.p4"
            defaultMessage="Сейчас Беларусь — страна с давней и хорошо развитой театральной культурой. Свой театр
            есть в каждом областном центре. А наш сайт призван познакомить Вас с наиболее известными
            теаральными режиссерами нашей страны. Вот один из них:"
          />
        </p>
      </article>
      <DirectorCard result={getRndElement(directorsInfo)} />
    </div>);
}

export default Home;
