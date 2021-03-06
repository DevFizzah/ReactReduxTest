import React, { Component } from 'react';

import './style.css';

const servicesList = [
    {   
        id: 1,
        serviceName: 'Ручное Бронирование',
        count: 10
    },
    {
        id: 2,
        serviceName: 'Пакетные Туры',
        count: 5
    },
    {
        id:3,
        serviceName: 'Отели',
        count: 15
    },
];
class ServicesList extends Component {
    calculateWidth(count){
        return count*100/this.props.total
    }
    render() {
        return (
            <div className="services-list">
                <h5>Услуг</h5>
              <ul>
                {
                    servicesList.map((item)=> (<li key={item.id}>
                                                <span 
                                                    style={{
                                                        width: `${this.calculateWidth(item.count)}%`
                                                    }}
                                                    className={item.id === 1 ? "first-service-name service-name"
                                                    : "service-name"}>{item.serviceName}
                                                </span>
                                                <span className="service-count">{item.count}</span>
                                               </li>))
                }
              </ul>
              <h4>Всего: <span className="services-total">{this.props.total}</span></h4>
            </div>
        );
    }
}

export default ServicesList;