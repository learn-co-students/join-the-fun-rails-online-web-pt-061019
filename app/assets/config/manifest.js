initializer :set_default_precompile do |app|
  if using_sprockets4?
    raise ManifestNeededError unless ::Rails.root.join("app/assets/config/manifest.js").exist?
    app.config.assets.precompile += %w( manifest.js )
  else
    app.config.assets.precompile += [LOOSE_APP_ASSETS, /(?:\/|\\|\A)application\.(css|js)$/]
  end
end
