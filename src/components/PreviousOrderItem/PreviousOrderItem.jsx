// import './OrderListItem.css'

// export default function OrderListItem({ order, isSelected, handleSelectorOrder }){
//     return (
//         <div className={`OrderListItem${isSelected ? ' selected': ''}`} onClick={() => handleSelectorOrder(order)}>
//             <div>
//                 <div>Order Id: <span className='smaller'>{order.orderId}</span></div>
//                 <div className='smaller'>{new Date(order.updatedAt).toLocaleDateString()}</div>
//             </div>
//             <div className='align-rt'>
//                 <div>${order.orderTotal.toFixed(2)}</div>
//                 <div className='smaller'>{order.totalQty} Item{order.totalQty > 1 ? 's' : ''}</div>
//             </div>
//         </div>
//     );
// };