import React from "react";
import { motion } from "framer-motion";

function SkillCard({ name, level, icon, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.03 }}
      className="bg-card border border-border rounded-xl p-5 shadow-sm hover:shadow-lg transition-all"
    >
      {/* Skill Header */}
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-3">
          <div className="text-primary text-xl">
            {icon}
          </div>

          <h3 className="font-semibold text-foreground">
            {name}
          </h3>
        </div>

        <span className="text-sm text-muted-foreground">
          {level}%
        </span>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-border rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, delay: index * 0.1 }}
          className="h-full bg-primary rounded-full"
        />
      </div>
    </motion.div>
  );
}

export default SkillCard;