import { useEffect, useState } from 'react';
import ShipmentProduct from '../components/ShipmentProducts';
import { useParams } from 'react-router-dom';
import api from '../api';
import Swal from 'sweetalert2';
// import { useNavigate } from 'react-router-dom';

const Shipment = () => {
	// const navigate = useNavigate();
	const { invoiceId } = useParams();
	const [invoice, setInvoice] = useState({});

	useEffect(() => {
		const fetchInvoice = async () => {
			try {
				const { data } = await api.get(`/invoices/${invoiceId}`, {
					headers: {
						Authorization: `Bearer ${localStorage.getItem('access_token')}`,
					},
				});
				// console.log(data, 'invoice from server');
				setInvoice(data);
			} catch (error) {
				console.log(error.response.data.message);
			}
		};
		fetchInvoice();
	}, []);

	const handleOnClickPay = async () => {
		try {
			console.log(localStorage.getItem('access_token'));
			const { data } = await api.get('/midtrans/token/' + invoiceId, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem('access_token')}`,
				},
			});
			console.log(data, 'payment from server');
			window.snap.pay(data.transaction_token, {
				onSuccess: async function (result) {
					/* You may add your own implementation here */
					console.log('payment success!');
					console.log(result);
					try {
						// const { data } = await api.post('/midtrans/success', result);
						// console.log(data, 'sucess payment server');
						// navigate('/transaction');
					} catch (error) {
						console.log(error);
					}
				},
				onPending: function (result) {
					console.log('wating your payment!');
					console.log(result);
				},
				onError: function (result) {
					console.log('payment failed!');
					console.log(result);
				},
				onClose: function () {
					console.log('you closed the popup without finishing the payment');
				},
			});
			console.log('>>> midtrans');
		} catch (error) {
			console.log(error.response.data.message);
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: `${error.response.data.message}`,
			});
		}
	};

	return (
		<div className="w-full min-h-screen gap-10 px-20 py-10 pt-24">
			<div className="text-3xl font-bold text-zinc-900 mb-10">Checkout</div>
			<div className="w-full flex">
				<div className="w-2/3 flex-col">
					<div className="w-full flex-col items-center gap-4 leading-6">
						<h1 className="text-lg text-zinc-900 font-bold">
							Alamat Pengiriman
						</h1>
						<div className="h-[1px] bg-gray-300 my-3"></div>
						<h1 className="text-md text-zinc-900 font-bold">
							{invoice?.User?.fullname}
						</h1>
						<h1 className=" text-zinc-900">
							{invoice?.User?.Profile.phoneNumber}
						</h1>
						<p className="text-zinc-900">{invoice?.User?.Profile.address}</p>
						<div className="h-[1px] bg-gray-300 my-3"></div>
					</div>
					<div className="w-full flex flex-col gap-4 mt-6">
						<h1 className="text-xl font-bold text-zinc-900">Barang</h1>
						{invoice?.OrderItems?.map((data) => {
							return (
								<div key={data.id} className="w-full h-36 flex">
									<ShipmentProduct data={data} />
								</div>
							);
						})}
					</div>
				</div>
				<div className="w-1/3 pl-20">
					<button
						onClick={handleOnClickPay}
						className="px-6 py-2 font-medium text-lg bg-green-700 text-slate-100 rounded-md active:bg-green-600"
					>
						PAY
					</button>
				</div>
			</div>
		</div>
	);
};

export default Shipment;
