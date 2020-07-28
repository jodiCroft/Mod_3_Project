class PapayasController < ApplicationController

    def index
        papayas = Papaya.all
        render json: papayas, include: :comments
    end

    def update
        @papaya = Papaya.find(params[:id])
        @papaya.update(papaya_params)
        render json: @papaya
    end

    private

        def papaya_params
            params.require(:papaya).permit(:likes, :id)
        end


end


