import { useState } from 'react';

function GameForm() {
    const [formData, setFormData] = useState({ name: '', price: '', stock: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/games/api/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                console.log('Données soumises avec succès !');
            } else {
                console.error('Erreur lors de la soumission des données.');
                console.error()
            }
        } catch (error) {
            console.error('Erreur inattendue :', error);
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
                <br/>
                <button type="submit">Soumettre</button>
            </form>
        </div>
    );
}

export default GameForm;
// hi