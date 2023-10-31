interface PersonProps {
  name: string;
  doc: string;
  age: number;
}

interface ContactProps {
  phone: string;
  email: string;
}
interface AdrressProps {
  city: string;
  zipCode: string | number; // 2 - Union Types
}

// 1 - Intersection Types
type CustumerProps = PersonProps | ContactProps | AdrressProps;

type PersonWithoutDocProps = Omit<PersonProps, "doc">; // 5 - Omit

type DocumentsProps = Pick<PersonProps, "doc">; // 4 - Pick

function exampleFunction<T>(args: T): T {
  console.log("args", args);
  return args;
} // 3 - Generic Types

type ButtonProps = {
  name: string;
  color: string;
  type: string;
};

type ButtonRecordProps = Record<"name" | "color" | "type", string>; // 7 - Records

type Day =
  | "Domingo"
  | "Segunda"
  | "Terça"
  | "Quarta"
  | "Quinta"
  | "Sexta"
  | "Sábado";

type EverDayCode = Record<Day, "code">; // 7 - Records

export default function App() {
  const handleSaveCustom = (customer: CustumerProps) => {
    console.log(customer);
  };

  handleSaveCustom({
    age: 26,
    city: "Belo Horizonte",
    doc: "123.323.323-01",
    name: "Bernardo",
    phone: "(31) 9 7508-6603",
    email: "bernardo.reis@email.com",
    zipCode: "31255-650",
  });

  exampleFunction({ name: "Bernardo" });

  function double(a: number | string) {
    if (typeof a === "number") {
      return `Resultado = ${a * 2}`;
    }
    throw new Error(
      `Erro - Não foi possível calcular o dobro do parametro ${typeof a}`
    );
  } // 6  - Typeof

  console.log(double(2));

  return (
    <div>
      <h2>Conceitos TypeScript</h2>
    </div>
  );
}
