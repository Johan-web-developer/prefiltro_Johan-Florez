import React, { useState, useEffect } from 'react';
import { Card, CardTitle, CardText, Row, Col, Container } from 'reactstrap';

const Trainers = () => {
    const [trainers, setCampers] = useState([]);
    const [images, setImages] = useState({});

    useEffect(() => {
        const obtenerTrainers = async () => {
            try {
                const response = await fetch('http://localhost:4000/api/trainers/todos_los_trainers');
                const data = await response.json();
                setCampers(data);

                // Obtener todas las imágenes
                const imagePromises = data.map(async camper => {
                    try {
                        const response = await import(`../../../assets/images/campers/${camper.imagen}`);
                        return { [camper.imagen]: response.default };
                    } catch (error) {
                        console.error('Error al cargar la imagen:', error);
                        return null;
                    }
                });

                const loadedImages = await Promise.all(imagePromises);
                const filteredImages = loadedImages.filter(image => image !== null);
                setImages(Object.assign({}, ...filteredImages));

            } catch (error) {
                console.error('Error al obtener campers:', error);
            }
        };

        obtenerTrainers();
    }, []);

    return (
        <div>
            <div className="spacer" id="card-component"></div>
            <Container>
                <Row>
                    {trainers.map((trainer, index) => {
                        const image = images[trainer.imagen];
                        return (
                            <Col md="6" key={index}>
                                <Card className="font-bold ui-card">
                                    <img className="card-img" src={image} alt={`trainer`} width={280} height={250}/>
                                    <CardTitle className='description'>{trainer.nombre}</CardTitle>
                                    <CardText className='description'>
                                        Experiencia: {trainer.experiencia} <br />
                                        Tecnologia: {trainer.tecnologia}
                                    </CardText>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </div>
    );
}

export default Trainers;