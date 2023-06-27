const User = require('../models/usermodel');


  exports.create = async (req, res) => {
    try {
      const { email, phoneNumber, productType, reason, platform } = req.body;
      
      // Check if the user already exists
      let user = await User.findOne({ $or: [{ email }, { phoneNumber }] });
      
      if (user) {
        // If the user exists, increase the count in returnHistory
        const existingProductType = user.returnHistory.find(item => item.type === productType);
        
        if (existingProductType) {
          // If the product type already exists, increase the count
          existingProductType.count += 1;
        } else {
          // If the product type does not exist, add it with count 1
          user.returnHistory.push({ type: productType, count: 1 });
        }
        
        await user.save();
        
        res.send(user);
      } else {
        // If the user does not exist, create a new user
        user = new User({ email, phoneNumber, productType, reason, platform });
        
        await user.save();
        
        res.send(user);
      }
    } catch (err) {
      res.status(500).send(err.message);
    }
  };
  
exports.search = async (req, res) => {
    try {
      const { email, phoneNumber } = req.query;
      const users = await User.find({ $or: [{ email }, { phoneNumber }] });
    //  res.render('search', { users });
    res.send(users)
    } catch (err) {
      res.status(500).send(err.message);
    }
  };
  
  exports.details = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findById(id);
      res.render('userDetails', { user });
    } catch (err) {
      res.status(500).send(err.message);
    }
  };

  exports.getByPlatform = async (req, res) => {
    try {
      const { platform } = req.params;
      const users = await User.find({ platform });
      const userData = users.map(user => {
        return {
          email: user.email,
          phoneNumber: user.phoneNumber,
          productType: user.productType
        };
      });
      res.json(userData);
    } catch (err) {
      res.status(500).send(err.message);
    }
  };
  
  