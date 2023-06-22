import React from "react";
import "../styles.css/About.css"
import { Row } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";

function About() {
    return (
        <section id="about">
            <Container>
                <Row>
                    <Col>
                        <h1>FAQ</h1>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    Does insurance cover Reiki treatments?
                                </Accordion.Header>
                                <Accordion.Body>
                                    Reiki is just starting to be recognized
                                    by insurance companies. While not many are covering
                                    Reiki treatments, some are. Check with your local
                                    insurance company for details.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                    How much does a treatment usually cost?
                                </Accordion.Header>
                                <Accordion.Body>
                                    A Reiki treatment usually will cost between
                                    $25.00 and $100.00 depending on the area of
                                    the country. However, some practitioners offer
                                    treatments free of charge or for a donation.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>
                                    How is a Reiki treatment given?
                                </Accordion.Header>
                                <Accordion.Body>
                                    In a standard treatment Reiki energy flows
                                    from the practitioners hands into the client.
                                    The client is usually laying on a massage table
                                    but treatments can also be given while the client
                                    is seated or even standing. The client remains
                                    fully clothed. The practitioner places her/his
                                    hands on or near the clients body in a series of
                                    hand positions. These include positions around the
                                    head and shoulders, the stomach, and feet. Other,
                                    more specific positions may be used based on the
                                    clients needs. Each position is held for three to
                                    ten minutes depending on how much Reiki the client
                                    needs at each position. The whole treatment usually
                                    lasts between 45 and 90 minutes.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>
                                    Are there any side effects from Reiki?
                                </Accordion.Header>
                                <Accordion.Body>
                                    Most of the time a person will feel relaxed and uplifted
                                    by a Reiki treatment. However, sometimes a person will
                                    have what is called a healing crisis. As a person’s
                                    vibration goes up, toxins that have been stored in the
                                    body will be released into the blood stream to be filtered
                                    by the liver and kidneys and removed from the system. When
                                    this happens, sometimes a person can get a headache or stomach
                                    ache or feel weak. If this happens, it is a good idea to drink
                                    more water, eat lighter meals and get more rest. The body is
                                    cleansing as part of the healing process so this is a good sign.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>
                                    Does one have to stop seeing a regular doctor
                                    or psychologist in order to receive a Reiki treatment?
                                </Accordion.Header>
                                <Accordion.Body>
                                    No. Reiki works in conjunction with regular medical or psychological
                                    treatment. If one has a medical or psychological condition, it is
                                    recommended that one see a licensed health care professional in addition
                                    to receiving Reiki treatments. Reiki energy works in harmony with all
                                    other forms of healing, including drugs, surgery, psychological care or
                                    any other method of alternative care and will improve the results.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                    <Col>
                        <article>
                            <h1>What is Reiki?</h1>
                            <article>
                                <p>
                                    Reiki is a Japanese technique for stress reduction and relaxation
                                    that also promotes healing. It is administered by "laying on hands"
                                    and is based on the idea that an unseen "life force energy" flows through
                                    us and is what causes us to be alive. If one's "life force energy" is
                                    low, then we are more likely to get sick or feel stress, and if it is
                                    high, we are more capable of being happy and healthy.
                                </p>
                                <p>
                                    The word Reiki is made of two Japanese words - Rei which means "God's Wisdom
                                    or the Higher Power" and Ki which is "life force energy". So Reiki is actually
                                    "spiritually guided life force energy."
                                </p>
                                <p>
                                    A treatment feels like a wonderful glowing radiance that flows through and around you.
                                    Reiki treats the whole person including body, emotions, mind and spirit creating many
                                    beneficial effects that include relaxation and feelings of peace, security and wellbeing.
                                    Many have reported miraculous results.
                                </p>
                                <p>
                                    Reiki is a simple, natural and safe method of spiritual healing and self-improvement that
                                    everyone can use. It has been effective in helping virtually every known illness and malady
                                    and always creates a beneficial effect. It also works in conjunction with all other medical
                                    or therapeutic techniques to relieve side effects and promote recovery.
                                </p>
                                <p>
                                    While Reiki is spiritual in nature, it is not a religion. It has no dogma, and there is nothing
                                    you must believe in order to learn and use Reiki. In fact, Reiki is not dependent on belief at
                                    all and will work whether you believe in it or not. Because Reiki comes from God, many people
                                    find that using Reiki puts them more in touch with the experience of their religion rather than
                                    having only an intellectual concept of it.
                                </p>
                            </article>
                        </article>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About;