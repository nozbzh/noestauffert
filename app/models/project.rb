class Project < ApplicationRecord

  validates :name, :summary, :content, :priority_order, presence: true
  validates :image, presence: true, on: :create

  mount_uploader :image, ProjectImageUploader

  scope :ordered, -> do
    order :priority_order
  end

  scope :published, -> { ordered.where(published: true) }

  before_create :set_slug

  private

  def set_slug
    self.slug = self.name.parameterize
  end
end
