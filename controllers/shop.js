import ShopSchema from "../schema/shop.js";
export const createShop = async (req, res) => {
  try {
    const {
      shopname,
      tagline,
      description,
      facebooklink,
      instagramlink,
      whatsapp,
      location,
      phonenumber,
      email,
      address,
      founderimage,
      image1,
      image2,
      image3,
      service1,
      service2,
      service3,
      service4,
    } = req.body;
    const result = await ShopSchema.findOne({ shopname });

    if (result) {
      return res.status(500).json({ message: "shop name aldready taken" });
    } else {
      await ShopSchema.create({
        shopname,
        tagline,
        description,
        facebooklink,
        instagramlink,
        whatsapp,
        location,
        phonenumber,
        email,
        address,
        founderimage,
        image1,
        image2,
        image3,
        service1,
        service2,
        service3,
        service4,
      });
      return res.status(200).json({ message: "Created successfully" });
    }
  } catch (error) {
    console.log(error);
  }
};

// export const signin = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const result = await ShopSchema.findOne({ email });
//     console.log(result);
//     if (!result) {
//       return res.status(500).json({ message: "Invalid details" });
//     }
//     if (password != result.password) {
//       return res.status(500).json({ message: "Invalid Credentials" });
//     } else {
//       return res.status(200).json({ result });
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(500).json(error);
//   }
// };
export const getShop = async (req, res) => {
  try {
    const result = await ShopSchema.find();

    return res.status(200).json({ result });
  } catch (error) {
    console.log(error);
  }
};

export const shopDetails = async (req, res) => {
  const { shopname } = req.params;
  try {
    const result = await ShopSchema.findOne({ shopname });

    if (result === null) {
      return res.status(200).json({ message: "notfound" });
    } else {
      return res.status(200).json({ result });
    }
  } catch (error) {
    console.log(error);
  }
};
