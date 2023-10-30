import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function GameForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    stock: "",
    selectedTags: [],
  });
  const [tags, setTags] = useState([]);
  const [isFormValid, setIsFormValid] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/api/tags")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const tagNames = data.map((tag) => tag.nameTags);
          setTags(tagNames);
        }
      })
      .catch((error) =>
        console.error("Erreur lors de la récupération des balises", error)
      );
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTagChange = (tag) => {
    const selectedTags = formData.selectedTags || [];
    if (selectedTags.includes(tag)) {
      setFormData({
        ...formData,
        selectedTags: selectedTags.filter((t) => t !== tag),
      });
    } else {
      setFormData({ ...formData, selectedTags: [...selectedTags, tag] });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.price || !formData.stock) {
      setIsFormValid(false);
      return;
    }
    try {
      const response = await fetch("http://localhost:3000/api/submit/game", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const data = await response.json(); // Parse the JSON response
        const message = data.message; // Access the "message" property
        if (message == "Game stored.") {
          navigate("/");
        }
      } else {
        console.error("Request failed with status:", response.status);
      }
    } catch (error) {
      console.error("There's been an error :", error);
    }
  };

  return (
    <section className={"container_newGame_page"}>
      <article className={"container_newGame_Form"}>
        <form className={"form_newGame"} onSubmit={handleSubmit}>
          {isFormValid ? null : (
            <p className={"error_input_not_valid"}>
              Tous les champs doivent être rempli.
            </p>
          )}
          <input
            id="name"
            type="text"
            name="name"
            placeholder={"Name of the game"}
            value={formData.name}
            onChange={handleChange}
          />
          <br />
          <input
            id="price"
            type="text"
            name="price"
            placeholder={"Price"}
            value={formData.price}
            onChange={handleChange}
          />
          <br />
          <input
            id="stock"
            type="number"
            name="stock"
            placeholder={"Stock"}
            value={formData.stock}
            onChange={handleChange}
          />
          <br />
          <label>Tags :</label>
          <div className={"container_tags_newGame"}>
            {tags.map((tag) => (
              <div className={"container_input_checkbox_newGame"} key={tag}>
                <input
                  type="checkbox"
                  name={tag}
                  checked={
                    formData.selectedTags && formData.selectedTags.includes(tag)
                  }
                  onChange={() => handleTagChange(tag)}
                />
                <label>{tag}</label>
              </div>
            ))}
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </article>
    </section>
  );
}

export default GameForm;
