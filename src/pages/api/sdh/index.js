import { dbConnect } from 'Utils/mongoose';
import Sdh from 'models/Sdh';

dbConnect();

export default async function handler(req, res) {
	const { method, body } = req;
	switch (method) {
		case 'GET':
			const sdhs = await Sdh.find();
			return res.status(200).json(sdhs);

		case 'POST':
			const newSdh = new Sdh(body);
			const savedSdh = await newSdh.save();
			return res.status(201).json(savedSdh);

		default:
			return res.status(400).json({ msg: 'This method is no support' });
	}
}
