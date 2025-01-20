import { useState } from "react";

function App() {
  const genders = [
    { key: "1", value: "Kadın" },
    { key: "2", value: "Erkek" },
  ];
  const catogoryList = [
    { key: 1, value: "PHP" },
    { key: 2, value: "JS" },
    { key: 3, value: "Pyhton" },
    { key: 4, value: "C++" },
  ];

  const [name, setName] = useState("Mert");
  const [description, setDescription] = useState("Can");
  const [gender, setGender] = useState("0");
  const selectedGender = genders.find((g) => g.key === gender);
  const [catogorys, setCatogorys] = useState([2, 4]);
  const [rule, setRule] = useState(true);
  const [rules, setRules] = useState([
    { key: 1, value: "1.Kuralı Kabul Ediyorum.", checked: false },
    { key: 2, value: "2.Kuralı Kabul Ediyorum.", checked: false },
    { key: 3, value: "3.Kuralı Kabul Ediyorum.", checked: true },
  ]);
  const checkRule = (key, checked) => {
    setRules((rules) =>
      rules.map((rule) => {
        if (key === rule.key) {
          rule.checked = checked;
        }
        return rule;
      })
    );
  };
  const enabled = rules.every((rule) => rule.checked);
  const selectedCatogorys =
    catogorys && catogoryList.filter((c) => catogorys.includes(c.key));
  return (
    <>
      <button onClick={() => setName("Can")}>Name'i Değiştir</button>
      <br />
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      {description}
      <br />
      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="">Seçin</option>
        {genders.map((gender, index) => (
          <option value={gender.key} key={gender.key}>
            {gender.value}
          </option>
        ))}
      </select>
      <button onClick={() => setCatogorys([1, 2, 3, 4])}>
        Katogorileri Seç
      </button>
      <select
        value={catogorys}
        multiple={true}
        onChange={(e) =>
          setCatogorys(
            [...e.target.selectedOptions].map((option) => +option.value)
          )
        }
      >
        <option value="">Seçin</option>
        {catogoryList.map((catogory) => (
          <option value={catogory.key} key={catogory.key}>
            {catogory.value}
          </option>
        ))}
      </select>

      <br />
      <pre>{JSON.stringify(selectedGender, null, 2)}</pre>
      <pre>{JSON.stringify(selectedCatogorys, null, 2)}</pre>
      <br />
      <label>
        <input
          type="checkbox"
          checked={rule}
          onChange={(e) => setRule(e.target.checked)}
        />
        Kuralları Kabul Ediyorum.
      </label>
      <br />
      {rules.map((rule) => (
        <label key={rule.key}>
          <input
            type="checkbox"
            checked={rule.checked}
            onChange={(e) => checkRule(rule.key, e.target.checked)}
          />
          {rule.value}
        </label>
      ))}

      <br />
      <pre>{JSON.stringify(rules, null, 2)}</pre>

      <br />
      <button disabled={!enabled}>Devam Et.</button>
    </>
  );
}

export default App;
