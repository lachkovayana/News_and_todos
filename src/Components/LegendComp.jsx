import React from 'react'
import { Card, Badge } from 'react-bootstrap'

export default function LegendComp() {
    return (
        <Card className="my-3">
            <Card.Body className="px-4 py-2">
                <div>
                    <h6><strong>Приоритеты элементов ToDo:</strong></h6>
                </div>
                <div>
                    <Badge bg="light" className="border border-dark" text="dark">
                        Обычный
                    </Badge>{" "}
                    <Badge bg="warning" className="border border-dark" text="dark">
                        Важный
                    </Badge>{" "}
                    <Badge bg="danger" className="border border-dark">Критичный</Badge>
                </div>
            </Card.Body>
        </Card >
    )
}
