import { Carousel } from "../Carousel.jsx";
import { ListaMusicaScreen } from "../Screens/ListaMusicaScreen.jsx";

function App() {
  return (
    <div className="min-h-screen bg-rose-50 flex flex-col items-center justify-center p-8 ">
      <h1 className="text-4xl md:text-5xl font-serif text-rose-800 mb-8">
        Para mi amada
      </h1>
      <div className="max-w-2xl text-center mb-12 relative">
        <p className="text-lg md:text-xl text-rose-700 font-light leading-relaxed">
          Cada día a tu lado es un regalo. Tu sonrisa ilumina mi mundo y tu amor
          me da fuerzas para enfrentar cualquier desafío. Eres mi compañera, mi
          mejor amiga. Te amo más de lo que las palabras pueden expresar.
        </p>
        <br />
        <pre className="text-lg md:text-xl text-rose-700 break-words whitespace-pre-wrap overflow-auto max-w-full">
          {
            " Eres mi mayor bendición\n\nDesde que llegaste a mi vida, todo tiene más sentido. No necesito grandes cosas para ser feliz, solo verte sonreír, escucharte hablar de tu día y sentir tu mano en la mía.\n\nA veces me pregunto cómo tuve tanta suerte de encontrarte. Eres mi apoyo, mi paz y mi mejor amiga. No hay momento a tu lado que no valore, porque cada día contigo es un regalo.\n\nNo prometo que todo será perfecto, pero sí prometo amarte, cuidarte y estar contigo en cada paso del camino. Porque eres lo mejor que me ha pasado, y haré todo lo posible para que siempre lo sepas."
          }
        </pre>
      </div>

      <Carousel />

      <section className="mt-16 max-w-4xl w-full">
        <h2 className="text-3xl md:text-4xl font-serif text-rose-800 mb-6 text-center">
          Nuestros momentos especiales
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-rose-700 mb-2">
              Nuestro primer encuentro
            </h3>
            <p className="text-rose-600">
              Ese dia en la asamblea, de casualidad nos cruzamos, me sonreiste y
              miraste al piso, nos saludamos y te guiñe el ojo y me fui, me fui
              pensando en tu sonrisa, ahi supe, que me estaba enamorando
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-rose-700 mb-2">
              Cuando revele mis sentimientos
            </h3>
            <p className="text-rose-600">
              Despues de los tres hermosos dias de asamblea, tocaba volver a
              nuestras cosas. Era lunes y no paraba de pensar en vos(Any),
              estube todo el dia en el trabajo pensando como decirte lo que
              sentia, y no espantarte, pero estaba decidido, estaba seguro de lo
              que sentia y queria, asi que me arme de valor y te mande un monton
              de audios... me acuerdo que cuando termine de mandarte los audios
              tenia el corazon a mil y no paraba de ver el celular haber si me
              respondias jajaja.....
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-rose-700 mb-2">
              Cuando conoci a tu familia
            </h3>
            <p className="text-rose-600">
              Cuando fui a conocer a tus papas, yo iba mentalisado para conocer
              a tus papas, pero me encontre a todos tus hermanos jaja, faltaba
              que estubiera aby por video llamada, me calleron todos bien, eran
              todos muy copados y graciosos, tu hermano muy celoso, demaciado
              chistoso, tu papa estubo un rato y se fue a llorar a la pieza
              jaja... fue un momento especial, y me dio mucha alegria al ver el
              apoyo de toda tu familia....
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-rose-700 mb-2">
              Nuestro amor hoy
            </h3>
            <p className="text-rose-600">
              Me acuerdo que deciamos de ir lento, un año conociendonos, enero
              hablar con tu papa para conocernos mejor y vernos un poco mas,
              pero yo ya fui directo a decirle que ibas a ser mi novia jaja,
              todo paso tan rapido, y no me arrepiento de nada, soy muy feliz,
              me haces feliz, por eso cada día a tu lado es una nueva
              oportunidad para amarte más y construir juntos nuestro futuro
              lleno de felicidad.
            </p>
            <p className="text-rose-600">Te Amo mucho 💖</p>
          </div>
        </div>
      </section>

      <footer className="mt-16 text-center text-rose-600">
        <p className="font-serif italic mb-7">
          {
            "Contigo, cada momento es especial y cada día es una nueva razón para amar."
          }
        </p>
      </footer>

      <ListaMusicaScreen />
    </div>
  );
}

export default App;
