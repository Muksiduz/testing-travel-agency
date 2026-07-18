import Package from "../models/package.model.js";

// ================================
// Create Package
// ================================
export const createPackage = async (req, res) => {
  try {
    const packageData = await Package.create(req.body);

    res.status(201).json({
      success: true,
      message: "Package created successfully",
      package: packageData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================================
// Get All Packages
// ================================
export const getPackages = async (req, res) => {
  try {
    const { search, featured, page = 1, limit = 10 } = req.query;

    const query = {};

    if (search) {
      query.title = {
        $regex: search,
        $options: "i",
      };
    }

    if (featured !== undefined) {
      query.featured = featured === "true";
    }

    const packages = await Package.find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const total = await Package.countDocuments(query);

    res.status(200).json({
      success: true,
      total,
      page: Number(page),
      pages: Math.ceil(total / limit),
      packages,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================================
// Get Single Package
// ================================
export const getPackageById = async (req, res) => {
  try {
    const packageData = await Package.findById(req.params.id);

    if (!packageData) {
      return res.status(404).json({
        success: false,
        message: "Package not found",
      });
    }

    res.status(200).json({
      success: true,
      package: packageData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================================
// Update Package
// ================================
export const updatePackage = async (req, res) => {
  try {
    const packageData = await Package.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      },
    );

    if (!packageData) {
      return res.status(404).json({
        success: false,
        message: "Package not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Package updated successfully",
      package: packageData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================================
// Delete Package
// ================================
export const deletePackage = async (req, res) => {
  try {
    const packageData = await Package.findById(req.params.id);

    if (!packageData) {
      return res.status(404).json({
        success: false,
        message: "Package not found",
      });
    }

    await packageData.deleteOne();

    res.status(200).json({
      success: true,
      message: "Package deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================================
// Toggle Featured
// ================================
export const toggleFeatured = async (req, res) => {
  try {
    const packageData = await Package.findById(req.params.id);

    if (!packageData) {
      return res.status(404).json({
        success: false,
        message: "Package not found",
      });
    }

    packageData.featured = !packageData.featured;

    await packageData.save();

    res.status(200).json({
      success: true,
      message: `Package ${
        packageData.featured ? "marked as featured" : "removed from featured"
      }`,
      package: packageData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
