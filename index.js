const handleSelection = (html) => {
  const container = document.getElementById("user-input-container");
  container.innerHTML = html;
};

const htmlMapper = {
  region: `
    <div class="form-inputs">
        <select>
            <option value="region">Region</option>
            <option value="country">Country</option>
        </select>
        <input type="text" />
    </div>
  `,
  dates: `
    <div class="form-inputs">
        <input type="date" placeholder="start date" />
        <input type="date" placeholder="start date" />
    </div>
    `,
  limit: `
    <div class="form-inputs">
        <input type="number" placeholder="limit" />
    </div>
    `,
};

document
  .getElementById("teacher-select")
  .addEventListener("change", ({ target: { value } }) => {
    handleSelection(htmlMapper[value]);
  });
