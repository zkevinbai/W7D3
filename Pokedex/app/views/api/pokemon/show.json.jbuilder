json.set! :pokemon do
  json.extract! @pokemon, :id, :name, :attack, :defense, :poke_type, :moves, :image_url
  json.set! :item_ids do
    json.array! @items, :id
  end
end

json.set! :items do
  @items.each do |item|
    json.set! item.id do
      json.extract! item, :id, :name, :pokemon_id, :price, :happiness, :image_url
    end
  end
end