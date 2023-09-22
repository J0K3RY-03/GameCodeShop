import { useEffect, useState } from "react";

function GameForm() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    stock: "",
    selectedTags: [],
  });
  const [tags, setTags] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/tags")
        .then((response) => response.json())
        .then((data) => {
          if (Array.isArray(data)) {
            const tagNames = data.map((tag) => tag.nameTags);
            console.log(tagNames);
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
    try {
      const response = await fetch("http://localhost:3000/api/submit/game", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("Données soumises avec succès !");
      } else {
        console.error("Erreur lors de la soumission des données.");
      }
    } catch (error) {
      console.error("Erreur inattendue :", error);
    }
  };

  return (
      <div>
        <h2>Formulaire Utilisateur</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name Game :
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Price :
            <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Stock :
            <input
                type="number"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
            />
          </label>
          <br />
          <label>Tags :</label>
          {tags.map((tag) => (
              <div key={tag}>
                <input
                    type="checkbox"
                    name={tag}
                    checked={
                        formData.selectedTags && formData.selectedTags.includes(tag)
                    }
                    onChange={() => handleTagChange(tag)}
                />
                <label>{tag}</label>
                {console.log(tags)}
              </div>
          ))}
          <br />
          <button type="submit">Soumettre</button>
        </form>
      </div>
  );
}

export default GameForm;